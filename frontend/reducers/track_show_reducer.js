import { RECEIVE_TRACK } from "../actions/track_actions";


const trackShowReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, action.track);
    default:
      return state;
  }
};

export default trackShowReducer;