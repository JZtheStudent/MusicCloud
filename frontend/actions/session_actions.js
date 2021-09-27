import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser 
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors 
});

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then((newUser) => dispatch(receiveCurrentUser(newUser)))
);