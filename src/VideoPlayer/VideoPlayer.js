import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {

    // 2. This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    window['onYouTubeIframeAPIReady'] = () => {
        player = new window.YT.Player('player', {
            videoId: 'DyDfgMOUjCI',
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        // event.target.playVideo();
    }

    return (
        <div className="video-container">
            <div id="player"></div>
        </div>
    );
};

export default VideoPlayer;