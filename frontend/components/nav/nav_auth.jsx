import React from 'react';
import { Link } from 'react-router-dom';

const NavAuth = ({currentUser, logout, openModal}) => {
  
  const sessionLinks = () => (
    <nav className="right-nav"> 
      <button className="auth-button" onClick={() => openModal('login')}>Login</button>
      <button className="auth-button" onClick={() => openModal('signup')}>Signup</button>
    </nav>
  )
  
  const personalGreeting = () => (
    <nav className="right-nav">
      <Link className="greeting-link" to="profile/tracks">
        <h2 className="greeting">Hi {currentUser.username}!</h2>
      </Link>
      <button className="auth-button" onClick={logout}>Log Out</button>
    </nav>
  )
  
  return (  
    currentUser ? 
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
}
 
export default NavAuth;