import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import userTracksReducer from "./user_tracks_reducer"; 

const entitiesReducer = combineReducers({
    user: usersReducer,
    tracks: tracksReducer,
    userTracks: userTracksReducer
});

export default entitiesReducer;