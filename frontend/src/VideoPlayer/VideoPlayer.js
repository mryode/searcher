import React, { useState, useEffect, useCallback } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {
    if (!window['onYouTubeIframeAPIReady']) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Requiremt for using YouTube iframe API - implemet onYouTubeIframeAPIReady
        window['onYouTubeIframeAPIReady'] = () => {
            window['player'] = new window.YT.Player('video-player', {
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
    }
    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(() => {
        if (window.player) {
            window.player.loadVideoById({ videoId: videoId });
        }
    }, [videoId])

    return (
        <div className="video-container">
            <div id="video-player"></div>
        </div>
    );
};

export default VideoPlayer;