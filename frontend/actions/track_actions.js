import * as TrackApiUtil from '../util/track_api_util';
import { fetchUserTracks } from './users_actions';


export const createTrack = (track, userId) => dispatch => (
  TrackApiUtil.createTrack(track, userId)
    .then(() => dispatch(fetchUserTracks(userId)))
);

export const updateTrack = (data, userId, trackId) => dispatch => (
  TrackApiUtil.updateTrack(data, userId, trackId)
    .then(() => dispatch(fetchUserTracks(userId)))
)