import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = ({session, entities}) => ({
  currentUser: entities.user[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);