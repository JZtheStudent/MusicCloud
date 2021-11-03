import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchTrack } from "../../actions/track_actions";
import { fetchUser } from "../../actions/users_actions";
import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id],
  track: entities.trackShow,
  comments: Object.values(entities.comments)
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchComments: trackId => dispatch(fetchComments(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);