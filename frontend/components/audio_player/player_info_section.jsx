import React from 'react';

const PlayerInfoSection = (props) => {
  const {trackTitle, trackArtist, trackAlbumArtUrl} = props;
  
  const albumArtImage = () => (
    trackAlbumArtUrl === "" ?
      <div></div> :
      <img className="player-info-album-art" src={trackAlbumArtUrl}/>
  )

  return (  
    <div className="player-info-section">
      {
        albumArtImage()
      }
      <div className="player-info-section-right">
        <h1 style={{color: 'gray'}}>{trackArtist}</h1>
        <h1 >{trackTitle}</h1>
      </div>
      
       
    </div>
  );
}
 
export default PlayerInfoSection;
