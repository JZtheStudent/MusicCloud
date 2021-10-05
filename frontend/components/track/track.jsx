import React from 'react';


class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.playClicked = this.playClicked.bind(this);
  }

  playClicked() {
    console.log(this.props.track.musicFile);
  }

  render() { 
    const { title, artist, albumArt } = this.props.track;
    return (  
      <div className="track">
        <div className="track-left-container">
          <div className="track-image-container">
            <button className="play-track-button" onClick={this.playClicked}>
              <img className="track-image" src={albumArt}/>
            </button>
          </div>
          <h2 className="play-text">Play</h2>
        </div>
        <div className="track-right-container">
          <h1 className="track-title">{title}</h1>
          <h2 className="track-artist-name" >{artist.username}</h2>
        </div>
      
      </div>
    );
  }
}
 
export default Track;

