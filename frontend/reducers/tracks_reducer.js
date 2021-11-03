import { RECEIVE_ALL_TRACKS} from "../actions/track_actions";


const tracksReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
      // return Object.assign({}, state, action.tracks);
    default:
      return state;
  }
};

export default tracksReducer;

