class ChangeComments < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, column: :commenter_id
    remove_index :comments, column: [:track_id, :commenter_id]
  
  end
end
