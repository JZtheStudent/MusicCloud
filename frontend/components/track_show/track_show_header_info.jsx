import React from 'react';
import {BiPlay} from 'react-icons/bi';
import {BiPause} from 'react-icons/bi';

class TrackShowHeaderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {track} = this.props;
    return (  
      <div className="track-show-header-info">
        <button className="track-show-play-pause-button"><BiPlay className="track-show-play"/></button>
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