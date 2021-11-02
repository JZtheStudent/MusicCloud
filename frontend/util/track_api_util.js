export const fetchTracks = () => (
  $.ajax({
    url: `/api/tracks`,
    method: 'GET'
  })
);

export const fetchTrack = trackId => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'GET'
  })
)


export const createTrack = (track) => (
  $.ajax({
    url: `/api/tracks`,
    method: 'POST',
    data: track,
    contentType: false,
    processData: false
  })
);

export const updateTrack = (data, userId, trackId) => (
  $.ajax({
    url: `/api/users/${userId}/tracks/${trackId}`,
    method: 'PATCH',
    data: data,
    contentType: false,
    processData: false
  })
)

export const deleteTrack = (trackId) => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'DELETE',
  })
)