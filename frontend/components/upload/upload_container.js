import { connect } from "react-redux";
import Upload from "./upload";

import { createTrack } from "../../actions/track_actions";

const mapStateToProps = ({session}) => ({
  currentUserId: session.id
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track, userId) => dispatch(createTrack(track, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
