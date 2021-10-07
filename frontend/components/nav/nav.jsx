import React from 'react';
import { Link } from 'react-router-dom';
import NavAuthContainer from './nav_auth_container';
import PageNavContainer from './page_nav_container';

const Nav = () => {
  return (  
    <div className="nav-bar">
      <div className="inner-nav-container">
        <div className="left-nav">

          <Link className="logo-link" to="/discover" >
            <img className="logo-img" src={window.logoURL} />
          </Link>
          
          <PageNavContainer />
        </div>
        <NavAuthContainer />
      </div>
      <div className="my-links">  
        <a href="https://github.com/JZtheStudent" target="_blank"><img className="social-logo" src={window.githubUrl}/></a>
        <a href="https://www.instagram.com/joshc_zhao/" target="_blank"><img className="social-logo" src={window.instagramUrl}/></a>
        <a href="https://www.linkedin.com/in/zhaojc/" target="_blank"><img className="social-logo" src={window.linkedinUrl}/></a>
      </div>

    </div>
  );
}
 
export default Nav;