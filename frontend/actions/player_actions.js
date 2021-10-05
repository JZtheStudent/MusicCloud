
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = currentTrackUrl => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrackUrl
});