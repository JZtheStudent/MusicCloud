import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const createTrack = track => dispatch => (
  TrackApiUtil.createTrack(track)
    .then(track => dispatch(receiveTrack(track)))
)