import React from 'react';
import {withRouter} from 'react-router';

class TrackShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchTrack(id);
  }

  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  
  
  render() { 
    const {track, currentUser} = this.props;
    if (!track) return null;
    
    return ( 
      <div>
        <h1>Track Show</h1>
        <h1>{track.title}</h1>
        <h1>{currentUser.username}</h1>
      </div> 
      
    );
  }
}
 
export default withRouter(TrackShow);