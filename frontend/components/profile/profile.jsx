import React from 'react';
import ProfileHeaderContainer from './profile_header/profile_header_container'
import ProfileNav from './profile_nav';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }
  

  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <ProfileHeaderContainer />
        <ProfileNav />
      
      </div>
      
      
      
    );
  }
}
 
export default Profile;