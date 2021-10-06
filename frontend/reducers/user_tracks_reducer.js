import { RECEIVE_USER_TRACKS } from "../actions/users_actions";

const userTracksReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_TRACKS:
      return Object.assign({}, state, action.userTracks)
    default:
      return state;
  }
};

export default userTracksReducer;

