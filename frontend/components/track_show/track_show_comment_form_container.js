import { connect } from "react-redux";
import TrackShowCommentForm from "./track_show_comment_form";
import { createComment } from "../../actions/comment_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowCommentForm);