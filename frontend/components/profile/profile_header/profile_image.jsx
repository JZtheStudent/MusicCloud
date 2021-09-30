import React from 'react';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const {currentUser} = this.props
    const imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('user[profile_photo]', imageFile);
    this.props.updateProfilePicture(formData, currentUser.id);
  }
  
  displayImage = () => (
    (this.props.profileImageUrl === "") ?
      <div></div> :
      <img className="profile-image" src={this.props.profileImageUrl}/>
  );

  render() { 
    return (  
      <div>
        <div className="profile-image-container">
          {
            this.displayImage()
          }
        </div>

        <button className="upload-image-button">
          <label className="upload-image-label">
            <input
              onChange={this.handleFile} 
              type="file"/>
            <img className="upload-camera-img" src={window.cameraImgURL}/>&nbsp;Upload image
          </label>
        </button>
        
      </div>
    );
  }
}
 
export default ProfileImage;