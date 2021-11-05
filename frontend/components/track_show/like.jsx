import React, { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Like = ({track, currentUser, likes, createLike, deleteLike}) => {
  
  let likeId = 0;

  const handleLike = (e) => {
    e.preventDefault();
    createLike({
      liker_id: currentUser.id,
      track_id: track.id
    })
  } 
  
  const handleUnlike = (e) => {
    e.preventDefault();
    deleteLike(likeId, track.id);
  }
  
  
  const isLiked = () => {
    const likesArr = Object.values(likes);
    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i].liker_id === currentUser.id) {
        likeId = likesArr[i].id;
        return true ;
      };
    };
    return false;
  }

  const displayHeart = () => {
    if (!currentUser) {
      return <AiFillHeart className="heart" />
    } else {
      if (isLiked()) {
        return <button className="like-button" onClick={e => handleUnlike(e)}><AiFillHeart className="heart liked" /></button>
      } else {
        return <button className="like-button" onClick={e => handleLike(e)}><AiOutlineHeart className="heart not-liked" /></button>
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