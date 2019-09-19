import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

import './SearchResults.css';

const SearchResults = ({ videoList, onPlayClick }) => {
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

export default SearchResults;
