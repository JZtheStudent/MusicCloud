json.extract! @user, :username, :id, :email
json.photoUrl url_for(@user.profile_photo)