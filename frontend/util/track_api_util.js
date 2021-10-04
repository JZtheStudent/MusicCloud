

export const createTrack = (track, userId) => {
  return (  $.ajax({
    url: `/api/users/${userId}/tracks`,
    method: 'POST',
    data: track,
    contentType: false,
    processData: false
  }))
};