
import { RECEIVE_CURRENT_TRACK, TOGGLE_PLAYER} from "../actions/player_actions";


const playerReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      return Object.assign({}, {currentTrack: action.currentTrack});
    case TOGGLE_PLAYER:
      newState['isPlaying'] = action.bool;
      return newState;
    default:
      return state;
  }
}

export default playerReducer;