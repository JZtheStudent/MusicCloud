import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchTrack } from "../../actions/track_actions";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id],
  track: entities.trackShow
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);