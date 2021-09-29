import React from 'react';
import ProfileHeaderContainer from './profile_header/profile_header_container'
import ProfileNav from './profile_nav';

class ProfileAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <ProfileHeaderContainer />
        <ProfileNav />
        <h2>Profile Albums</h2>
      </div>
    );
  }
}
 
export default ProfileAlbums;