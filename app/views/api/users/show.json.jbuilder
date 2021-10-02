json.extract! @user, :username, :id, :email, :track_ids
json.profilePhoto @user.profile_photo.attached? ? url_for(@user.profile_photo) : ''