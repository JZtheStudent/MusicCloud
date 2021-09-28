import React from 'react';
import {Link} from 'react-router-dom';

class PageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="page-nav">
        <Link className="page-nav-item" to="/discover">
          <h2>Home</h2>
        </Link>
        <Link className="page-nav-item" to="/stream">
          <h2>Stream</h2>
        </Link>
        <Link className="page-nav-item" to="/library">
          <h2>Library</h2>
        </Link>
      </div>
    );
  }
}
 
export default PageNav;