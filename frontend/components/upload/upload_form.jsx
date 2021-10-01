import React from 'react';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      
      <form className="upload-track-form">
          <div className="upload-track-form-left">
            <div className="upload-track-image-container">
              <img className="upload-track-image" src={window.cameraImgURL} />
              <button className="upload-track-image-button" onClick={() => e.preventDefault()}>
                <label className="upload-image-label">
                  <input
                    onChange={this.handleFile} 
                    type="file"/>
                  <img className="upload-camera-img" src={window.cameraImgURL}/>&nbsp;Upload image
                </label>
              </button>            
            </div>

          </div>
          <div className="upload-track-form-right">
          
          </div>
      </form>
   
    );
  }
}
 
export default UploadForm;