class ChangeTracks2 < ActiveRecord::Migration[5.2]
  def change

    add_column(:tracks, :album_art_url, :string, null: false)
    add_column(:tracks, :music_file_url, :string, null: false)
  
  end
end
