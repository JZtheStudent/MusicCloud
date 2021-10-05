import { combineReducers } from "redux";
import currentTrackReducer from "./current_track_reducer";

const playerReducer = combineReducers({
  currentTrack: currentTrackReducer
});

export default playerReducer;