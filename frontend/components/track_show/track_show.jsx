import React from 'react';
import {withRouter} from 'react-router';
import TrackShowHeaderContainer from './track_show_header_container';
import TrackShowCommentFormContainer from './track_show_comment_form_container';
import {FaComment} from 'react-icons/fa';

class TrackShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchTrack(id);
    if (this.props.currentUser) this.props.fetchUser(this.props.currentUser.id);
  }
  
  constructor(props) {
    super(props);
    this.state = {  
      avgColor: "#E6846E"
    }
  }
  
  displayArtistImage = () => (
    (this.props.track.artistImage === "") ?
      <div></div> :
      <img className="track-show-artist-image" src={this.props.track.artistImage}/>
  )
  
  render() { 
    const {track, currentUser} = this.props;
    if (!track) return null;
    console.log(currentUser);
    return ( 
      <div>
        <TrackShowHeaderContainer track={track} avgColor={this.state.avgColor}/>
        {
          currentUser ? <TrackShowCommentFormContainer currentUser={currentUser} /> : <div></div>
        }

        <div className='track-show-bottom-section'>
          <div className='track-show-artist-section'>
            <div className="track-show-artist-image-container">
              {this.displayArtistImage()}
            </div>
            <h1>{track.artist}</h1>
          </div>
          
          <div className="track-show-comments-section">
            <h1><FaComment />&nbsp; 0 Comments</h1>
          </div>
          
          
        </div>
      </div> 
      
    );
  }
}
 
export default withRouter(TrackShow);