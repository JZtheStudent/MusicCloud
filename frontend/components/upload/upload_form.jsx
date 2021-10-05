import React from 'react';
import {withRouter} from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      title: "",
      albumArt: null,
      musicFile: null,
      imagePreview: null
    }
    this.handleAlbumArtFile = this.handleAlbumArtFile.bind(this);
    this.handleMusicFile = this.handleMusicFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAlbumArtFile(e) {
    e.preventDefault();
    const imageFile = e.currentTarget.files[0];
    this.setState({
      albumArt: imageFile,
      imagePreview: URL.createObjectURL(imageFile)})
  }
  
  handleMusicFile(e) {
    e.preventDefault();
    this.setState({musicFile: e.currentTarget.files[0]})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[album_art]', this.state.albumArt);
    formData.append('track[music_file]', this.state.musicFile);
    formData.append('track[artist_id]',this.props.currentUserId);
    this.props.createTrack(formData, this.props.currentUserId)
      .then(() => this.props.history.push('/profile/tracks'))
  }

  change(item) {
    return e => {this.setState({ [item]: e.currentTarget.value })}
  }
  
  displayImage = () => (
    (this.state.imagePreview === null) ?
      <div></div> :
      <img className="upload-track-image" src={this.state.imagePreview}/>
  )
  
  
  render() { 
    return (  
      <div className="upload-track-form">
          <div className="upload-track-form-left">
            <div className="upload-track-image-container">
              {
                this.displayImage()
              }       
            </div>
            <button className="upload-track-image-button" >
                <label className="upload-image-label">
                  <input
                    onChange={this.handleAlbumArtFile} 
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
            <div className="upload-music-button-group">
              <button className="upload-music-button">
                <label className="upload-music-label">
                  <input 
                    onChange={this.handleMusicFile}
                    type="file"
                    accept=".mp3"/> 
                  <img className="upload-note-img" src={window.cameraImgURL} />&nbsp;Upload Mp3
                </label>
              </button>
              {
                (this.state.musicFile) ?
                <div><br/><h3>Music File Uploaded!</h3></div> :
                <div></div>
              }
            </div>
            
            <button onClick={this.handleSubmit}>Upload</button>
    
      
          
          </div>
      </div>
   
    );
  }
}
 
export default withRouter(UploadForm);