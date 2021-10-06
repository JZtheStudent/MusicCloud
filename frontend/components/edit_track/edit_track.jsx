import React, {useState} from 'react';
import {useLocation, withRouter} from 'react-router-dom';

const EditTrack = (props) => {
  const location = useLocation();
  const { track } = location.state;
  
  const [title, setTitle] = useState(track.title);
  const imagePreview = track.albumArt;
  const artistId = track.artist.id;
  const trackId = track.id;
  
  const titleChanged = () => {
    return e => {setTitle(e.currentTarget.value)}
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', title);
    props.updateTrack(formData, artistId, trackId)
      .then(props.history.push('/profile/tracks'));
  }

  return (  
    <div className="upload-outer-container">
      <div className="upload-inner-container">
        <div className="upload-track-form">
          <div className="upload-track-form-left">
            <div className="upload-track-image-container">
                <img className="upload-track-image" src={imagePreview} /> 
            </div>
          </div>
          <div className="upload-track-form-right">
            <label className="upload-title-label">Title:<br/>
              <input 
                type="text"
                value={title}
                onChange={titleChanged()}
                className="upload-title-input"/>
            </label>
            <button onClick={handleSubmit}>Edit</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
 
export default withRouter(EditTrack);