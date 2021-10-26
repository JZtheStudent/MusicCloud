import React from 'react';

class TrackShow extends React.Component {
  componentDidMount() {
    this.props.fetchTrack(1);
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
 
export default TrackShow;