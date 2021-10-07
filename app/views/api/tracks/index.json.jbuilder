@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :title, :artist_id, :id 
    json.artist track.artist
    json.albumArt track.album_art.attached? ? url_for(track.album_art) : ""
    json.musicFile track.music_file.attached? ? url_for(track.music_file) : ""
  end
end



