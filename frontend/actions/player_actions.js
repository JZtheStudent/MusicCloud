
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const TOGGLE_PAUSE = 'TOGGLE_PLAY';

export const receiveCurrentTrack = currentTrack => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrack
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const togglePause = () => ({
  type: TOGGLE_PAUSE
});