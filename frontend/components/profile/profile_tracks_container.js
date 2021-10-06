import { connect } from "react-redux";
import ProfileTracks from "./profile_tracks";
import { fetchUserTracks } from "../../actions/users_actions";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id],
  userTracks: Object.values(entities.userTracks)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUserTracks: userId => dispatch(fetchUserTracks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTracks);
