import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchTrack } from "../../actions/track_actions";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id],
  track: entities.trackShow
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);