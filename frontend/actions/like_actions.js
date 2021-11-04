import * as LikeApiUtil from '../util/like_api_util'

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes 
});

export const fetchLikes = trackId => dispatch => (
  LikeApiUtil.fetchLikes(trackId)
    .then(likes => dispatch(receiveAllLikes(likes)))
);

export const createLike = like => dispatch => (
  LikeApiUtil.createLike(like)
    .then(() => dispatch(fetchLikes(like.track_id)))
);

export const deleteLike = (likeId, trackId) => dispatch => (
  LikeApiUtil.deleteLike(likeId)
    .then(() => dispatch(fetchLikes(trackId)))
)