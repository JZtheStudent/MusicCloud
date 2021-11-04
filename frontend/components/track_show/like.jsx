import React, { useEffect } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Like = ({track, currentUser, likes, createLike, deleteLike, fetchLikes}) => {
  
  console.log(track)
  console.log(currentUser)

  useEffect(() => {
    fetchLikes(track.id);
  }, []);
  
  const handleLike = () => {

  } 
  
  const handleUnlike = () => {
    
  }
  
  
  const isLiked = () => {
    Object.values(likes).forEach(like => {
      if (like.liker_id === currentUser.id) return true;
    });
    return false;
  }

  const displayHeart = () => {
    if (!currentUser) {
      return <AiFillHeart className="heart" />
    } else {
      if (isLiked()) {
        return <button className="like-button"><AiFillHeart className="heart liked" /></button>
      } else {
        return <button className="like-button"><AiOutlineHeart className="heart not-liked" /></button>
      }
    }
    
  }
  
  const numLikes = Object.keys(likes).length;

  return (  
    <div className="like-container">
      {
        displayHeart()
      }
      <h1>&nbsp;{numLikes}&nbsp;{numLikes === 1 ? 'Like' : 'Likes'}&nbsp;</h1>
    </div>
  );
}
 
export default Like;