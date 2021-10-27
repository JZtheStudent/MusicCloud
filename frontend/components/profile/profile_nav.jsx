import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (  
    <div className="profile-nav">
      <Link to="/profile">
        <h2>All Tracks</h2>
      </Link>
    
    </div>
  );
}
 
export default ProfileNav;
