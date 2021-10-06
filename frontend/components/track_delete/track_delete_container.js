import { connect } from "react-redux";
import TrackDelete from "./track_delete";
import { deleteTrack } from "../../actions/track_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  deleteTrack: (userId, trackId) => dispatch(deleteTrack(userId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDelete);