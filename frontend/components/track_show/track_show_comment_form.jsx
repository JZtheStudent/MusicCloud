import React, {useState} from 'react';

const TrackShowCommentForm = (props) => {
  
  const [input, setInput] = useState('');
  
  const inputChanged = () => {
    return e => {
      setInput(e.currentTarget.value);
    }
  }

  return (  
    <div className='track-show-comment-form-container'>
      <div className='track-show-comment-form'>
        <img src={props.currentUser.profilePhoto}/>
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