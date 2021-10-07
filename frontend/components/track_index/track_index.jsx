import React from 'react';

const TrackIndex = ({track, play}) => {
  
  const playClicked = () => {
    play(track);
  }

  return (  
    <div className="dicover-index-item">
      <div className="track-image-container">
        <button className="play-track-button" onClick={playClicked}>
          <img className="track-image" src={track.albumArt}/>
        </button>
      </div>
      <h1 className="discover-track-title">{track.title}</h1>
      <h1 className="discover-track-artist">{track.artist.username}</h1>
    
    </div>
  );
}
 
export default TrackIndex;