

export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const updateProfilePicture = (formData, userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)