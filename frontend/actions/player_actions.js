
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';


export const receiveCurrentTrack = currentTrack => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrack
});

export const togglePlayer = (bool) => ({
  type: TOGGLE_PLAYER,
  bool
});

