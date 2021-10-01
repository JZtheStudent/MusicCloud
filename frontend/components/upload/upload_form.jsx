import React from 'react';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      title: ""
    }
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {

  }

  change(item) {
    return e => {this.setState({ [item]: e.currentTarget.value })}
  }
  
  displayImage = () => (
    <div></div>
  )
  

  render() { 
    return (  
      
      <form className="upload-track-form">
          <div className="upload-track-form-left">
            <div className="upload-track-image-container">
              {
                this.displayImage()
              }       
            </div>
            <button className="upload-track-image-button" onClick={() => e.preventDefault()}>
                <label className="upload-image-label">
                  <input
                    onChange={this.handleFile} 
                    type="file"
                    accept=".jpeg, .jpg, .png"/>
                  <img className="upload-camera-img" src={window.cameraImgURL}/>&nbsp;Upload image
                </label>
            </button>     
          </div>
          <div className="upload-track-form-right">
            <label className="upload-title-label">Title:<br/>
              <input 
                type="text"
                value={this.state.title}
                onChange={this.change('title')}
                className="upload-title-input"/>
            </label>
            <button className="upload-music-button">
              <label className="upload-music-label">
                <input 
                  type="file"
                  accept=".mp3"/> 
                <img className="upload-note-img" src={window.cameraImgURL} />&nbsp;Upload Mp3
              </label>
            </button>
            <button type="submit">
              UPLOAD
            </button>

          </div>
      </form>
   
    );
  }
}
 
export default UploadForm;