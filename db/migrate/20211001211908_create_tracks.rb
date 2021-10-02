class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false 
      t.string :album_art_url
      t.string :music_file_url

      t.timestamps
    end
  
    add_index :tracks, :title
  
  end
end
