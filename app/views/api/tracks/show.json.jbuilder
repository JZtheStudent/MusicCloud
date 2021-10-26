json.extract! @track, :title, :id
json.artist @artist.username
json.artistImage @artist.profile_photo.attached? ? url_for(@artist.profile_photo) : ""
json.albumArt @track.album_art.attached? ? url_for(@track.album_art) : ""
json.musicFile @track.music_file.attached? ? url_for(@track.music_file) : ""