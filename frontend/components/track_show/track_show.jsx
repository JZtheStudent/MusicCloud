import React from 'react';
import {withRouter} from 'react-router';
import TrackShowHeaderContainer from './track_show_header_container';

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
        <TrackShowHeaderContainer track={track} />
      </div> 
      
    );
  }
}
 
export default withRouter(TrackShow);