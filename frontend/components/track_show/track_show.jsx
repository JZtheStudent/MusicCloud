import React from 'react';
import {withRouter} from 'react-router';
import TrackShowHeaderContainer from './track_show_header_container';
import FastAverageColor from 'fast-average-color';

class TrackShow extends React.Component {
  componentDidMount() {
    const fac = new FastAverageColor();
    const id = this.props.match.params.id;
    this.props.fetchTrack(id);
      // .then(() => {
      //   fac.getColorAsync(this.props.track.albumArt)
        
      // })
  }
  
  constructor(props) {
    super(props);
    this.state = {  
      avgColor: "#E6846E"
    }
  }
  
  
  
  render() { 
    const {track, currentUser} = this.props;
    if (!track) return null;
    
    return ( 
      <div>
        <TrackShowHeaderContainer track={track} avgColor={this.state.avgColor}/>
      </div> 
      
    );
  }
}
 
export default withRouter(TrackShow);