json.extract! @track, :title, :artist_id, :id
json.albumArt @track.album_art.attached? ? url_for(@track.album_art) : ""
json.musicFile @track.music_file.attached? ? url_for(@track.music_file) : ""