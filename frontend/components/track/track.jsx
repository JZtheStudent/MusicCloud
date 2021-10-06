import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BiEditAlt} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.playClicked = this.playClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
  }
  
  playClicked() {
    this.props.receiveCurrentTrack(this.props.track);
  }
  
  deleteClicked() {
    // console.log(this.props.track);
    const {artist, id } = this.props.track;
    if (confirm('Are you sure you want to delete this track?')) {
      this.props.deleteTrack(artist.id, id)
        .then(props.history.push('/profile/tracks'));
    } 
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
          <div className="track-right-top-container">
            <h1 className="track-title">{title}</h1>
            <h2 className="track-artist-name" >{artist.username}</h2>
          </div>
          <div className="track-right-bottom-container">
            <Link to={{
              pathname: '/edit_track',
              state: {
                track: this.props.track
              }
            }}><BiEditAlt className="track-edit-link" /></Link>
            <button className="track-delete-button" onClick={this.deleteClicked}>
              <RiDeleteBin5Line/>
            </button>
          </div>
        </div>
      
      </div>
    );
  }
}
 
export default withRouter(Track);

