import { connect } from "react-redux";
import ProfileTracks from "./profile_tracks";
import { fetchUserTracks } from "../../actions/users_actions";
import entitiesReducer from "../../reducers/entities_reducer";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUserTracks: userId => dispatch(fetchUserTracks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTracks);
