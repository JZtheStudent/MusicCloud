import React from 'react';
import { Link } from 'react-router-dom';
import NavAuthContainer from './nav_auth_container';

const Nav = () => {
  return (  
    <div className="nav-bar">
      <Link to="/" > 
        <h1>Music Cloud</h1>
      </Link>
      <NavAuthContainer />
    </div>
  );
}
 
export default Nav;