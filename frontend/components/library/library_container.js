import { connect } from "react-redux";
import Library from "./library";
import { fetchLikedTracks, fetchUser } from "../../actions/users_actions";

const mapStateToProps = ({ session, entities}) => ({
  likedTracks: Object.values(entities.likedTracks),
  currentUser: entities.user[session.id]
});

const mapDispatchToProps = dispatch => ({
  // fetchUser: userId => dispatch(fetchUser(userId)),
  fetchLikedTracks: userId => dispatch(fetchLikedTracks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);