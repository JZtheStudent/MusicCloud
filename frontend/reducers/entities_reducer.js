import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import userTracksReducer from "./userTracksReducer"; 

const entitiesReducer = combineReducers({
    user: usersReducer,
    tracks: tracksReducer,
    userTracks: userTracksReducer
});

export default entitiesReducer;