@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :commenter_id, :track_id, :body
    json.commenter comment.commenter
  end
end