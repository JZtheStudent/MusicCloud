import * as TrackApiUtil from '../util/track_api_util';
import { fetchUserTracks} from './users_actions';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';

const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
})


export const fetchTracks = () => dispatch => (
  TrackApiUtil.fetchTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)))
)

export const createTrack = (track, userId) => dispatch => (
  TrackApiUtil.createTrack(track, userId)
    .then(() => dispatch(fetchUserTracks(userId)))
);

export const updateTrack = (data, userId, trackId) => dispatch => (
  TrackApiUtil.updateTrack(data, userId, trackId)
    .then(() => dispatch(fetchUserTracks(userId)))
)

export const deleteTrack = (userId, trackId) => dispatch => (
  TrackApiUtil.deleteTrack(userId, trackId)
    .then(() => dispatch(fetchUserTracks(userId)))
)