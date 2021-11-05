import { connect } from "react-redux";
import { createLike, deleteLike, fetchLikes } from "../../actions/like_actions";
import Like from "./like";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: (likeId, trackId) => dispatch(deleteLike(likeId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);