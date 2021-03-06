import React from 'react';
import ProfileHeaderContainer from './profile_header/profile_header_container'
import ProfileNav from './profile_nav';
import {Link} from 'react-router-dom';
import TrackContainer from '../track/track_container';


class ProfileTracks extends React.Component {
  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.id);
    this.props.fetchUser(this.props.currentUser.id);
  }
  
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() { 
    return (  
      <div className="profile-page-container">
        <ProfileHeaderContainer currentUser={this.props.currentUser}/>
        <ProfileNav />

        <h1 className="profile-section-title">Your Tracks</h1>
        <div className="user-tracks-container">
          {
            this.props.userTracks.map((track, idx) => (
              <TrackContainer 
                track={track}
                key={idx} />
            ))
          }
        </div>
        
        <Link className="upload-link" to="/upload">Upload Track</Link>
      </div>
    );
  }
}
 
export default ProfileTracks;