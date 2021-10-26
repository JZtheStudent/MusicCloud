import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndex = ({track, play}) => {
  
  const playClicked = () => {
    play(track);
  }
  

  return (  
    <div className="dicover-index-item">
      <div className="track-image-container">
        {/* <button className="play-track-button" onClick={playClicked}>
          <img className="track-image" src={track.albumArt}/>
        </button> */}
        <Link className="play-track-button" to={`/tracks/${track.id}`}>
          <img className="track-image" src={track.albumArt}/>
        </Link>
      </div>
      <h1 className="discover-track-title">{track.title}</h1>
      <h1 className="discover-track-artist">{track.artist.username}</h1>
    
    </div>
  );
}
 
export default TrackIndex;