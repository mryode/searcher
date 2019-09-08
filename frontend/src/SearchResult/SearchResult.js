import React from 'react';

import './SearchResult.css';

const SearchResult = () => {
    return (
        <div className="search-result">
            <img className="video-thumbnail" src="https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg" alt="Video Thumbnail"/>
            <div className="video-details">
                <h1>Billie Eilish - bad guy</h1>
                <h4>Views: 100M</h4>
            </div>
            <button className="play-btn">Play!</button>
        </div>
    );
};

export default SearchResult;
