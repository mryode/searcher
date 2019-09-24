import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import HistoryList from './HistoryList/HistoryList';

import './App.css';

const App = () => {

    const [currentVideoPlaying, setCurrentVideoPlaying] = useState("DbL7Frf6nJI");
    const [historyList, setHistoryList] = useState([]);

    const handlePlayClick = (videoId, videoTitle) => {
        setCurrentVideoPlaying(videoId);

        const newVideo = {
            videoId,
            videoTitle
        };
        axios.post('http://localhost:3001/history/add', newVideo)
            .then(resp => {
                const { _id, videoId, videoTitle } = resp.data;
                setHistoryList(historyList.concat({ _id, videoId, videoTitle }));
            })
            .catch(err => console.error(err));
    }

    const handleDeleteClick = videoMongoId => {
        axios.delete(`http://localhost:3001/history/${videoMongoId}`)
            .then(resp => {
                const { _id } = resp.data;
                setHistoryList(historyList.filter(video => video._id !== _id));
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get('http://localhost:3001/history/')
            .then(resp => setHistoryList(resp.data))
            .catch(err => console.error(err));
    })

    return (
        <div className="app-container">
            <div className="search-container">
                <SearchBar onPlayClick={handlePlayClick} />
            </div>
            <div className="content-container">
                <HistoryList historyList={historyList} onDeleteClick={handleDeleteClick} />
                <VideoPlayer videoId={currentVideoPlaying} />
            </div>
        </div>
    );
};

export default App;