import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoPlayer = React.createRef();
  }

  handlePlay = () => {
    this.videoPlayer.current.play();
  };

  handlePause = () => {
    this.videoPlayer.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video ref={this.videoPlayer} className="video-player__source">
          <source src={videoFile} />
        </video>
        <div className="video-player__buttons">
          <button onClick={this.handlePlay}>Play</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
