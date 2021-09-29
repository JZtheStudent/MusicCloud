import React from 'react';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <div className="profile-image-container">
        
        </div>
        <button className="upload-image-button">
          <img className="upload-camera-img" src={window.cameraImgURL}/>&nbsp;Upload image
        </button>
      </div>
    );
  }
}
 
export default ProfileImage;