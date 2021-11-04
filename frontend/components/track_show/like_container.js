import { connect } from "react-redux";
import { createLike, deleteLike, fetchLikes } from "../../actions/like_actions";
import Like from "./like";

const mapStateToProps = state => ({
  likes: state.entities.likes
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: (likeId, trackId) => dispatch(deleteLike(likeId, trackId)),
  fetchLikes: trackId => dispatch(fetchLikes(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);