import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';

  playerPlay() {
    this.HTMLVideoElement.play();
  }
  playerStop() {
    this.HTMLVideoElement.pause();
  }
  render() {
    return (
      <div className="video-player">
        <video ref={video => (this.HTMLVideoElement = video)} className="video-player__source">
          <source src={videoFile} type="video/mp4" />
        </video>
        <button onClick={this.playerPlay.bind(this)}>Play</button>
        <button onClick={this.playerStop.bind(this)}>Stop</button>
      </div>
    );
  }
}

export default VideoPlayer;
