import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';
  constructor(props) {
    super(props)
    this.playerPlay = this.playerPlay.bind(this)
    this.playerStop = this.playerStop.bind(this)
  }
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
        <button onClick={this.playerPlay}>Play</button>
        <button onClick={this.playerStop}>Stop</button>
      </div>
    );
  }
}

export default VideoPlayer;
