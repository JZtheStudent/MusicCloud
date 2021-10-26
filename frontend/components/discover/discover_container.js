import { connect } from 'react-redux';
import Discover from './discover';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from "../../actions/player_actions";

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.trackIndex)
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);