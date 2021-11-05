import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import playerReducer from "./player_reducer";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import tracksReducer from "./tracks_reducer";

const appReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
  errors: errorsReducer,
  player: playerReducer
});



const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_CURRENT_USER) {
  //   return loggedOutReducer(undefined, action);
  // }
  return appReducer(state,action);
}

export default rootReducer;