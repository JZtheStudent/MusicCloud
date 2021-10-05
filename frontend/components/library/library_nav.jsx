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

      </div>
    );
  }
}
 
export default LibraryNav;