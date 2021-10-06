

export const createTrack = (track, userId) => {
  return (  $.ajax({
    url: `/api/users/${userId}/tracks`,
    method: 'POST',
    data: track,
    contentType: false,
    processData: false
  }))
};

export const updateTrack = (data, userId, trackId) => (
  $.ajax({
    url: `api/users/${userId}/tracks/${trackId}`,
    method: 'PATCH',
    data: data,
    contentType: false,
    processData: false
  })
)