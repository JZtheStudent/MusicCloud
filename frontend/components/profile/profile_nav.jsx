import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (  
    <div className="profile-nav">
      <Link to="/profile">
        <h2>All</h2>
      </Link>
      <Link to="/profile/tracks">
        <h2>Tracks</h2>
      </Link>
      <Link to="/profile/playlists">
        <h2>Playlists</h2>
      </Link>
    </div>
  );
}
 
export default ProfileNav;
