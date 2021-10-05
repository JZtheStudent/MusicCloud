
const _nulltrack = {
  track_url: null
};

const currentTrackReducer = (state=_nulltrack, action) => {
  Object.freeze(state);
  switch(action.type) {

    default:
      return state;
  }
};

export default currentTrackReducer;