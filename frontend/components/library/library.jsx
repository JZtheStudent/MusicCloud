import React from 'react';
import TrackIndex from '../track_index/track_index';

class Library extends React.Component {
  
  componentDidMount() {
    this.props.fetchLikedTracks(this.props.currentUser.id);
  }

  render() { 
    return ( 
      <div className="discover-page-container">
        <ul className="discover-page-list">
          {
            this.props.likedTracks.map(track => (
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
 
export default Library;