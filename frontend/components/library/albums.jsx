import React from 'react';
import LibraryNavContainer from './library_nav_container';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <LibraryNavContainer />
        <h1>ALBUMS</h1>
      </div>
    );
  }
}
 
export default Albums;