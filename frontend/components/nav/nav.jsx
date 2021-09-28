import React from 'react';
import { Link } from 'react-router-dom';
import NavAuthContainer from './nav_auth_container';
import PageNavContainer from './page_nav_container';

const Nav = () => {
  return (  
    <div className="nav-bar">
      <div className="left-nav">
        <Link to="/" > 
          <h1>Music Cloud</h1>
        </Link>
        <PageNavContainer />
      </div>
      
      <NavAuthContainer />
    </div>
  );
}
 
export default Nav;