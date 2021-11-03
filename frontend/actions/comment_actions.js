import * as CommentApiUtil from '../util/comment_api_util';


export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const fetchComments = (trackId) => dispatch => (
  CommentApiUtil.fetchComments(trackId)
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = (comment) => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(() => dispatch(fetchComments(comment.track_id)))
);