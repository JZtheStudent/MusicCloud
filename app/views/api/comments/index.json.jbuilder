@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :commenter_id, :track_id, :body
    json.commenterName comment.commenter.username
    json.commenterImage comment.commenter.profile_photo.attached? ? url_for(comment.commenter.profile_photo) : ""
  end
end

