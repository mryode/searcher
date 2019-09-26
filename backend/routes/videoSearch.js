const express = require('express');
const youtubeApi = require('../youtube');

const router = express.Router();

router.get('/:searchString', (req, res) => {
    const { searchString } = req.params;

    let searchParams = {
        part: 'snippet',
        type: 'video',
        maxResults: 3,
        q: searchString
    };

    youtubeApi.search.list(searchParams)
        .then(json => {
            const ids = json.data.items.map(item => item.id.videoId)
            return youtubeApi.videos.list({
                part: 'snippet,statistics',
                id: ids.join(',')
            })
        })
        .then(json => {
            console.log('json', json.data.items);
            const result = json.data.items.map(item => {
                return {
                    videoId: item.id,
                    videoTitle: item.snippet.title,
                    videoThumbnails: item.snippet.thumbnails.high,
                    videoViews: item.statistics.viewCount
                }
            })
            res.status(200).json(result);
        })
        .catch(err => console.log('this is error: ' + err));
});

module.exports = router;