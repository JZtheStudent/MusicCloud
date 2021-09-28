import React from 'react';
import {Link} from 'react-router-dom'

class LibraryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="library-nav">
        <Link to="/library">
          <h2>Overview</h2>
        </Link>
        <Link to="/likes">
          <h2>Likes</h2>
        </Link>
        <Link to="/playlists">
          <h2>Playlists</h2>
        </Link>
        <Link to="/albums">
          <h2>Albums</h2>
        </Link>
        <Link to="/following">
          <h2>Following</h2>
        </Link>
        <Link to="/history">
          <h2>History</h2>
        </Link>
      </div>
    );
  }
}
 
export default LibraryNav;