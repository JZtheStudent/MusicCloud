class ChangeTracks3 < ActiveRecord::Migration[5.2]
  def change
    remove_column(:tracks, :album_art_url)
    remove_column(:tracks, :music_file_url)
  end
end
