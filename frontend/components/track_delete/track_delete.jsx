import React, {useState, useRef, useEffect} from 'react';
import {useLocation, withRouter} from 'react-router-dom';

const TrackDelete = (props) => {
  const location = useLocation();
  const { track } = location.state;
  
  const title = track.title;
  const imagePreview = track.albumArt;
  const artistId = track.artist.id;
  const trackId = track.id;
  

  const [inputText, setInputText] = useState('');
  const [matching, setMatching] = useState(false);
  
  
  useEffect(() => {
    checkMatching();
  }, [inputText]);
  

  const inputChanged = () => {
    return e => {
      setInputText(e.currentTarget.value)
    }
  }
  
  const checkMatching = () => {
    if (inputText === title) {
      setMatching(true);
    } else {
      setMatching(false);
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    props.deleteTrack(artistId, trackId)
      .then(props.history.push('/profile/tracks'))
      .then(window.location.reload());
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
            <h1>Type song title to confirm:</h1>
            <label className="upload-title-label">{title}<br/>
              <input 
                type="text"
                value={inputText}
                onChange={inputChanged()}
                className="upload-title-input"/>
            </label>
            <button 
              className="confirm-button"
              onClick={handleSubmit} 
              disabled={!matching}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
 
export default withRouter(TrackDelete);