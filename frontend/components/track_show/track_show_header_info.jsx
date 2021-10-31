import React from 'react';
import {BiPlay} from 'react-icons/bi';
import {BiPause} from 'react-icons/bi';

class TrackShowHeaderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClicked = this.handleClicked.bind(this);
  }
  
  trackShowPlayPauseButton = () => {
    if (this.props.isPlaying) {
      if (this.props.currentTrack.id === this.props.track.id) {
        return (
          <BiPause className="track-show-pause"/>
        )
      } else {
        return (
          <BiPlay className="track-show-play" />
        )
      }
    } else {
      return (
        <BiPlay className="track-show-play" />
      )
    }
  }

  handleClicked() {
    if (this.props.isPlaying) {
      if (this.props.currentTrack.id === this.props.track.id) {
        this.props.togglePlayer(false);
      } else {
        this.props.receiveCurrentTrack(this.props.track);
      }
    } else {
      if (!this.props.currentTrack || this.props.currentTrack.id !== this.props.track.id) {
        this.props.receiveCurrentTrack(this.props.track);
      } else {
        this.props.togglePlayer(true);
      }
      
    }
  }

  render() { 
    const {track} = this.props;
    console.log(`Track: ${track.id}`);
    if (this.props.currentTrack) {
      console.log(`Track Playing: ${this.props.currentTrack.id}`);
    } else {
      console.log(`Track Playing: undefined`)
    }
    console.log(this.props.isPlaying);
    return (  
      <div className="track-show-header-info">
        <button className="track-show-play-pause-button" onClick={this.handleClicked}>{this.trackShowPlayPauseButton()}</button>
        <div className="track-show-header-info-text">
          <div className="track-show-header-artist-container">
            <h1 className="track-show-header-artist">{track.artist}</h1>
          </div>
          <h1 className="track-show-header-title">{track.title}</h1>
        </div>
      </div>
      
    );
  }
}
 
export default TrackShowHeaderInfo;