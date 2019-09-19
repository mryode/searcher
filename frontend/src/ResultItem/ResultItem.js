import React from 'react';

import './ResultItem.css';

const ResultItem = ({ videoId, videoTitle, videoThumbnailsUrl, videoViews, onPlayClick }) => {

    return (
        <div className="search-result">
            <img className="video-thumbnail" src={videoThumbnailsUrl} alt="Video Thumbnail" />
            <div className="video-details">
                <h1>{videoTitle}</h1>
                <h4>{`Views: ${videoViews}`}</h4>
            </div>
            <button
                className="play-btn"
                onClick={() => onPlayClick(videoId)}
            >Play!</button>
        </div>
    );
};

export default ResultItem;
