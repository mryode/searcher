import React from 'react';

import './HistoryItem.css';

const HistoryItem = ({ video, onDeleteClick }) => {
    return (
        <div className="history-record">
            <h3>{video.videoTitle}</h3>
            <button onClick={() => onDeleteClick(video._id)}>Delete</button>
        </div>
    )
}

export default HistoryItem;
