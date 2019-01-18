import React, { Component } from 'react';
import YouTube from 'react-youtube';

//https://www.youtube.com/watch?v=_nBlN9yp9R8
//https://youtu.be/_nBlN9yp9R8

export default class Youtube extends Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(50);
        console.log(event.target)
      }

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
        const {videoId} = this.props
        return (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this.videOnReady}
          />
        );
      }
     
     
}
