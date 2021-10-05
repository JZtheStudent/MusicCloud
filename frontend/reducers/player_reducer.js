
import { RECEIVE_CURRENT_TRACK } from "../actions/player_actions";


const playerReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      return Object.assign({}, {currentTrack: action.currentTrack});
    default:
      return state;
  }
}

export default playerReducer;