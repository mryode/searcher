import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';

import './App.css';

const App = () => {

    const [currentVideoPlaying, setCurrentVideoPlaying] = useState("DbL7Frf6nJI");

    const handlePlayClick = videoId => {
        setCurrentVideoPlaying(videoId);
    }

    return (
        <div className="app-container">
            <div className="search-container">
                <SearchBar onPlayClick={handlePlayClick}/>
            </div>
            <div className="main">
                <div className="history-container">
                    <h1>History</h1>
                    <ul>
                        <li>Video 1</li>
                        <li>Video 2</li>
                        <li>Video 3</li>
                        <li>Video 4</li>
                        <li>Video 5</li>
                    </ul>
                </div>
                <div className="video-container">
                    <VideoPlayer videoId={currentVideoPlaying}/>
                </div>
            </div>
        </div>
    ); 
};

export default App;