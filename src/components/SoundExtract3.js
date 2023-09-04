import "../css/sound.css";
import React, { Component } from "react";

import millionnaire from "../music/millionnaire-oner.m4a";
import play from "../images/picto-play.png";
import slash from "../images/slash.png";
import stop from "../images/picto-break.png";

class SoundExtract2 extends Component {
  state = {
    audio: new Audio(millionnaire),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="player">
        <button className="btn-player" onClick={this.playPause}>
          <img className="pictos-sound" src={play} alt="picto play" />
          <img className="pictos-sound" src={slash} alt="picto slash" />
          <img className="pictos-sound" src={stop} alt="picto pause" />
        </button>
      </div>
    );
  }
}

export default SoundExtract2;
