import { connect } from "react-redux";
import TrackDelete from "./track_delete";
import { deleteTrack } from "../../actions/track_actions";
import { fetchUserTracks } from "../../actions/users_actions";

const mapStateToProps = ({entities}) => ({
  userTracks: Object.values(entities.userTracks)
});

const mapDispatchToProps = dispatch => ({
  deleteTrack: (userId, trackId) => dispatch(deleteTrack(userId, trackId)),
  fetchUserTracks: userId => dispatch(fetchUserTracks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDelete);