import React from 'react';
import SearchResult from '../ResultItem/ResultItem';

import './ResultList.css';

const ResultList = ({ videoList, onPlayClick }) => {
    return (
        <div className="search-results-container">
            {videoList.map(video => {
                return <SearchResult
                    key={video.videoId}
                    videoId={video.videoId}
                    videoTitle={video.videoTitle}
                    videoThumbnailsUrl={video.videoThumbnails.url}
                    videoViews={video.videoViews}
                    onPlayClick={onPlayClick}
                />
            })}
        </div>
    );
};

export default ResultList;
