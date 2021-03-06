import { connect } from "react-redux";
import TrackShowComment from "./track_show_comment";
import { deleteComment } from "../../actions/comment_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  deleteComment: (commentId, trackId) => dispatch(deleteComment(commentId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowComment);