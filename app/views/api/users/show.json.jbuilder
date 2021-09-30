json.extract! @user, :username, :id, :email
json.profilePhoto @user.profile_photo.attached? ? url_for(@user.profile_photo) : ''