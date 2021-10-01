import React from 'react';
import ProfileHeaderContainer from './profile_header/profile_header_container'
import ProfileNav from './profile_nav';
import {Link} from 'react-router-dom';

class ProfileTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <ProfileHeaderContainer />
        <ProfileNav />
        <h2>Profile Tracks</h2>
        <Link to="upload">Upload</Link>
      </div>
    );
  }
}
 
export default ProfileTracks;