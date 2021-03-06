import React from 'react';
import {withRouter} from 'react-router';
import TrackShowHeaderContainer from './track_show_header_container';
import TrackShowCommentFormContainer from './track_show_comment_form_container';
import TrackShowCommentContainer from './track_show_comment_container';
import LikeContainer from './like_container';
import {FaComment} from 'react-icons/fa';

class TrackShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchTrack(id);
    this.props.fetchComments(id);
    this.props.fetchLikes(id);
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
    const {track, currentUser, comments, likes} = this.props;
    if (!track) return null;
    return ( 
      <div>
        <TrackShowHeaderContainer track={track} avgColor={this.state.avgColor}/>
        {
          currentUser ? <TrackShowCommentFormContainer track={track} currentUser={currentUser} /> : <div></div>
        }

        <div className='track-show-bottom-section'>
          <div className='track-show-artist-section'>
            <div className="track-show-artist-image-container">
              {this.displayArtistImage()}
            </div>
            <h1>{track.artist}</h1>
          </div>
          
          <div className="track-show-comments-section">
            <h1><LikeContainer track={track} currentUser={currentUser} likes={likes}/>&nbsp;
            <FaComment />&nbsp;{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
            </h1>
            {
              comments.map((comment, idx) => (
                <TrackShowCommentContainer currentUser={currentUser} comment={comment} key={idx}/>
              ))
            }
          </div>
          
          
        </div>
      </div> 
      
    );
  }
}
 
export default withRouter(TrackShow);