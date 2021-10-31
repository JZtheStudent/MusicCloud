import React from 'react';

import TrackShowHeaderInfoContainer from './track_show_header_info_container';
class TrackShowHeader extends React.Component {


  constructor(props) {
    super(props);
    this.state = {  
      
    }
  }
  
  render() { 

    const {track, avgColor} = this.props;
    return (  
      <div className="track-show-header">
        <div className="track-show-background-no-image"
          style={{background: `linear-gradient(45deg, #A6B7DB, ${avgColor} )`}}>
          <TrackShowHeaderInfoContainer track={track}/>
          <div className="track-show-image-container">
            <img className="track-show-image" src={track.albumArt} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default TrackShowHeader;