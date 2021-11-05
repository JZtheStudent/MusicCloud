import { RECEIVE_LIKED_TRACKS } from "../actions/users_actions";

const likedTracksReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKED_TRACKS:
      return action.likedTracks;
    default:
      return state;
  }
};

export default likedTracksReducer;