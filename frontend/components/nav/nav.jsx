import React from 'react';
import { Link } from 'react-router-dom';
import NavAuthContainer from './nav_auth_container';
import PageNavContainer from './page_nav_container';

const Nav = () => {
  return (  
    <div className="nav-bar">
      <div className="inner-nav-container">
        <div className="left-nav">

          <Link className="logo-link" to="/" >
            <img className="logo-img" src={window.logoURL} />
          </Link>
          
          <PageNavContainer />
        </div>
        
        <NavAuthContainer />
      </div>
      
    </div>
  );
}
 
export default Nav;