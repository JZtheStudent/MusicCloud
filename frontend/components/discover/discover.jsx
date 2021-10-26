import React from 'react';
import TrackIndex from '../track_index/track_index';


class Discover extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }
  render() { 
    return (  
      <div className="discover-page-container">
        <ul className="discover-page-list">
          {
            this.props.tracks.map(track => (
              <TrackIndex 
                key={track.id}
                track={track}
                play={this.props.receiveCurrentTrack}/>
            ))
          }
        </ul>
      </div>
    );
  }
}
 
export default Discover;