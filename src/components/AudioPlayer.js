import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends Component {
  render() {
    return (
      <div className="AudioPlayer" id="audio-player">
        <h2>pulAudio Player <span id="treble-clef-icon">&#127932;</span></h2>
        <div className="player-body">

        </div>
      </div>
    )
  }
}

export default AudioPlayer
