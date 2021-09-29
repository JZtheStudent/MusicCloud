import React from 'react';

class ProfileDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="profile-info">
        <h2 className="profile-name">{this.props.currentUser.username}</h2>
        {/* change this to description later */}
        {/* <h3 className="profile-description">{this.props.currentUser.username}</h3> */}
      </div>
    );
  }
}
 
export default ProfileDescription;