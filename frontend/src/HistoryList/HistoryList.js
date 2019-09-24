import React from 'react';

import HistoryItem from '../HistoryItem/HistoryItem';

import './HistoryList.css';

const HistoryList = ({ historyList, onDeleteClick }) => {
    return (
        <div className="history-container">
            <h1>Watch History</h1>
            <div className="history-list">
                {historyList.map(video => <HistoryItem key={video._id} video={video} onDeleteClick={onDeleteClick} />)}
            </div>
        </div>
    )
}

export default HistoryList;
