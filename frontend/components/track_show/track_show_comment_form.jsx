import React, {useEffect, useState} from 'react';

const TrackShowCommentForm = (props) => {
  
  const [input, setInput] = useState('');
  
  const inputChanged = () => {
    return e => {
      setInput(e.currentTarget.value);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createComment({
      commenter_id: props.currentUser.id,
      track_id: props.track.id,
      body: input
    });
    setInput('');
  }
  

  
  
  const displayCurrentUserImage = () => (
    (!props.currentUser) ?
      <div className="track-show-comment-form-image"></div> :
      <img className="track-show-comment-form-image" src={props.currentUser.profilePhoto}/>
  )

  return (  
    <div className='track-show-comment-form-container'>
      <div className='track-show-comment-form-section'>
        {displayCurrentUserImage()}
        <form onSubmit={handleSubmit}>
          <div className="track-show-comment-input-container">
            <input 
              type="text"
              value={input}
              onChange={inputChanged()}
              placeholder="Write a comment"
              className="track-show-comment-input"
            />
            <button className="track-show-form-submit-button" type="submit">Add Comment</button>
          </div>
          
        </form>
        
        
      </div>
    </div>
  );
}
 
export default TrackShowCommentForm;