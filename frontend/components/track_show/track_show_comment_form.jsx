import React, {useState} from 'react';

const TrackShowCommentForm = (props) => {
  
  const [input, setInput] = useState('');
  
  const inputChanged = () => {
    return e => {
      setInput(e.currentTarget.value);
    }
  }
  
  const displayCurrentUserImage = () => (
    (!props.currentUser) ?
      <div className="track-show-comment-form-image"></div> :
      <img className="track-show-comment-form-image" src={props.currentUser.profilePhoto}/>
  )

  return (  
    <div className='track-show-comment-form-container'>
      <div className='track-show-comment-form'>
        {displayCurrentUserImage()}
        <div className="track-show-comment-input-container">
          <input 
            type="text"
            value={input}
            onChange={inputChanged()}
            placeholder="Write a comment"
            className="track-show-comment-input"
          />
        </div>
        
      </div>
    </div>
  );
}
 
export default TrackShowCommentForm;