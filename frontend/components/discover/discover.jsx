import React, {useEffect} from 'react';
import TrackIndex from '../track_index/track_index';

// const Discover = (props) => {
  
//   useEffect(() => {
//     props.fetchTracks();
//   });
  
//   return (  
//     <div className="discover-page-container">
//       <ul>
//         {
//           props.tracks.map(track => (
//             <TrackIndex 
//               key={track.id}
//               track={track}
//               play={props.receiveCurrentTrack}/>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }
 
// export default Discover;

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