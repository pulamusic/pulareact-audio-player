import React, { Component } from 'react';
import HeroImg from './../assets/images/Strat-front-large-stylized.png';
import SectionDiv from './SectionDiv';
import AudioPlayer from './AudioPlayer';

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <div className="Main-hero">
          <figure>
            <HeroImg />
            <figcaption>Yes, this is my guitar. It's mine, and it belongs to me. Thank you. . . I realize you didn't ask, of course, but thank you nonetheless. 😉</figcaption>
          </figure>
          <h1>a custom audio player using React Player</h1>
        </div>
        <SectionDiv />
        <AudioPlayer />
        <SectionDiv />
      </div>
    )
  }
}

export default Main
