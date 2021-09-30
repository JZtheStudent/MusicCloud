import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
);