class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenter_id, null: false
      t.integer :track_id, null: false
      t.string :body, null: false 
      
      t.timestamps
    end
    
    add_index :comments, :commenter_id
    add_index :comments, [:track_id, :commenter_id], unique: true

  end
end
