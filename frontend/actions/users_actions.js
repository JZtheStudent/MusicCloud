import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_TRACKS = 'RECEIVE_USER_TRACKS'

export const receiveUserTracks = userTracks => ({
  type: RECEIVE_USER_TRACKS,
  userTracks
});


export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const updateProfilePicture = (formData, userId) => dispatch => (
  UserApiUtil.updateProfilePicture(formData, userId)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const fetchUserTracks = userId => dispatch => (
  UserApiUtil.fetchUserTracks(userId)
    .then(userTracks => dispatch(receiveUserTracks(userTracks)))
);