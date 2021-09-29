import React from 'react';
import ProfileImageContainer from './profile_image_container';
import ProfileDescriptionContainer from './profile_description_container';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="profile-header">
        <div className="profile-background-no-image">
          <div className="profile-header-info-container">
            <ProfileImageContainer />
            <ProfileDescriptionContainer />
            
            <button className="upload-background-image-button">
              <img className="upload-camera-img" src={window.cameraImgURL}/>&nbsp;Upload header image
            </button>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default ProfileHeader;