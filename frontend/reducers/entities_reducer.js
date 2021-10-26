import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import userTracksReducer from "./user_tracks_reducer"; 
import trackShowReducer from "./track_show_reducer";

const entitiesReducer = combineReducers({
    user: usersReducer,
    trackIndex: tracksReducer,
    trackShow: trackShowReducer,
    userTracks: userTracksReducer
});

export default entitiesReducer;