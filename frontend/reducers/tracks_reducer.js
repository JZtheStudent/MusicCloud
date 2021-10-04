import { RECEIVE_TRACK } from '../actions/track_actions';

const tracksReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default tracksReducer;

