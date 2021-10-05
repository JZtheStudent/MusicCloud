json.array! @user.tracks do |track|
  json.title track.title 
  json.artist track.artist
  json.albumArt url_for(track.album_art)
  json.musicFile url_for(track.music_file)
end