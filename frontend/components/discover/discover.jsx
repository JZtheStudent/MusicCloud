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
      <div>
        <h1>DISCOVER PAGE</h1>
        <button onClick={this.handleClick}>Stream</button>
      </div>
    );
  }
}
 
export default withRouter(Discover);