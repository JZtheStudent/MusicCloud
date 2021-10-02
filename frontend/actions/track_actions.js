import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const createTrack = (track, userId) => dispatch => (
  TrackApiUtil.createTrack(track, userId)
    .then(track => dispatch(receiveTrack(track)))
)