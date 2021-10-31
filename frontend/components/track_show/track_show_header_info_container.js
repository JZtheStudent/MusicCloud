import { connect } from "react-redux";
import { togglePlayer } from "../../actions/player_actions";
import { receiveCurrentTrack } from "../../actions/player_actions";
import TrackShowHeaderInfo from "./track_show_header_info";

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying,
  currentTrack: state.player.currentTrack
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  togglePlayer: (bool) => dispatch(togglePlayer(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowHeaderInfo);
