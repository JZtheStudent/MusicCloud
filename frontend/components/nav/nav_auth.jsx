import React from 'react';

const NavAuth = ({currentUser, logout, openModal}) => {
  
  const sessionLinks = () => (
    <nav>
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  )
  
  const personalGreeting = () => (
    <nav className="personal-greeting">
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </nav>
  )

  return (  
    currentUser ? 
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
}
 
export default NavAuth;