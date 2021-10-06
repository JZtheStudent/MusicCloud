import React from 'react';
import {withRouter} from 'react-router-dom'


class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.props.history.push('/stream');
  }

  render() { 
    return (  
      <div className="discover-page-container">
        <h1 className="discover-header">COMING SOON</h1>
      </div>
    );
  }
}
 
export default withRouter(Discover);