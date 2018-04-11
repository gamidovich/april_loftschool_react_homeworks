import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent { // не будет перередервиваться при обновлении

  playVideo = () => {
    this.child.play();
  }

  stopVideo = () => {
    this.child.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video ref={c => (this.child = c)} className="video-player__source">
          <source type="video/mp4" src={videoFile}></source>
        </video>
        <div>
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;


