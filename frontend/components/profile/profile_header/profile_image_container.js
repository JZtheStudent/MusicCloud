import { connect } from "react-redux";
import ProfileImage from './profile_image';
import { updateProfilePicture } from "../../../actions/users_actions";

const mapStateToProps = ({session, entities}) => ({
  profileImageUrl: entities.user[session.id].profilePhoto,
  currentUser: entities.user[session.id]
});

const mapDispatchToProps = dispatch => ({
  updateProfilePicture: (formData, userId) => dispatch(updateProfilePicture(formData, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);