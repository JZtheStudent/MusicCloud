import React from 'react';
import LibraryNavContainer from './library_nav_container';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <LibraryNavContainer />
        <h1>FOLLOWING</h1>
      </div>
    );
  }
}
 
export default Following;
