import React from 'react';
import {RiDeleteBin5Line} from 'react-icons/ri';

const TrackShowComment = ({comment, currentUser, deleteComment}) => {
  
  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.id, comment.track_id);
  }
  
  return (  
    <div className="comment">
      <div className="comment-box">
        <img src={comment.commenterImage} />
        <div className="comment-right">
          <div className="comment-right-top">
            <h1>{comment.commenterName}</h1>
          </div>
          <div className="comment-right-bottom">
            <h1>{comment.body}</h1>
            {
              (!currentUser || currentUser.id !== comment.commenter_id) ?
              <div></div> :
              <button onClick={e => handleDelete(e)}><RiDeleteBin5Line /></button>
            }
            
          </div>
        
        </div>
        
      </div>
      
    </div>
  );
}
 
export default TrackShowComment;