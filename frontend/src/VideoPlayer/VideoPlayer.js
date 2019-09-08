import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Requiremt for using YouTube iframe API - implemet onYouTubeIframeAPIReady
    window['onYouTubeIframeAPIReady'] = () => {
        const player = new window.YT.Player('player', {
            videoId: 'DyDfgMOUjCI',
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        console.log('player ready - ', event);
        event.target.pauseVideo();
    }

    return (
        <div className="video-container">
            <div id="player"></div>
        </div>
    );
};

export default VideoPlayer;