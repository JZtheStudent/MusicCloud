

export const createTrack = track => (
  $.ajax({
    url: `/api/users/${track.artistId}/tracks`,
    method: 'POST',
    data: {track}
  })
);