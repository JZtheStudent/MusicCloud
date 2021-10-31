
import { RECEIVE_CURRENT_TRACK, TOGGLE_PLAY, TOGGLE_PAUSE } from "../actions/player_actions";


const playerReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      return Object.assign({}, {currentTrack: action.currentTrack});
    case TOGGLE_PLAY:
      return Object.assign({}, {isPlaying: true});
    case TOGGLE_PAUSE:
      return Object.assign({}, {isPlaying: false})
    default:
      return state;
  }
}

export default playerReducer;