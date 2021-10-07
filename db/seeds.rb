# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create(
  username: 'demo-user',
  email: 'demo-user@demo.com',
  password: '123456'
)

u1 = User.create(
  username: 'Illenium',
  email: 'illenium@gmail.com',
  password: '123456'
)

u1_pfp = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/profile_pics/illenium.png')
u1.profile_photo.attach(io: u1_pfp, filename: 'illenium.png')
u1.save!


t1 = Track.create(
  title: 'Nightlight',
  artist_id: u1.id
)
t1_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/nightlight.jpeg')
t1_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/nightlight.mp3')
t1.album_art.attach(io: t1_aa, filename: 'nightlight.jpeg')
t1.music_file.attach(io: t1_mf, filename: 'nightlight.mp3')
t1.save!

t2 = Track.create(
  title: 'Every Piece Of Me',
  artist_id: u1.id
)
t2_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/ascend.jpeg')
t2_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/every_piece_of_me.mp3')
t2.album_art.attach(io: t2_aa, filename: 'ascend.jpeg')
t2.music_file.attach(io: t2_mf, filename: 'every_piece_of_me.mp3')
t2.save!

t3 = Track.create(
  title: 'Fractures',
  artist_id: u1.id
)
t3_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/awake.jpeg')
t3_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/fractures.mp3')
t3.album_art.attach(io: t3_aa, filename: 'awake.jpeg')
t3.music_file.attach(io: t3_mf, filename: 'fractures.mp3')
t3.save!

t4 = Track.create(
  title: 'Fortress',
  artist_id: u1.id
)
t4_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/ashes.jpeg')
t4_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/fortress.mp3')
t4.album_art.attach(io: t4_aa, filename: 'ashes.jpeg')
t4.music_file.attach(io: t4_mf, filename: 'fortress.mp3')
t4.save!



u2 = User.create(
  username: 'Lauv',
  email: 'lauv@gmail.com',
  password: '123456'
)

u2_pfp = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/profile_pics/lauv.png')
u2.profile_photo.attach(io: u2_pfp, filename: 'lauv.png')
u2.save!

t5 = Track.create(
  title: "fuck, i'm lonely",
  artist_id: u2.id
)
t5_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/fuck_im_lonely.png')
t5_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/fuck_im_lonely.mp3')
t5.album_art.attach(io: t5_aa, filename: 'fuck_im_lonely.jpeg')
t5.music_file.attach(io: t5_mf, filename: 'fuck_im_lonely.mp3')
t5.save!

t6 = Track.create(
  title: 'Feelings',
  artist_id: u2.id
)
t6_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/feelings.png')
t6_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/feelings.mp3')
t6.album_art.attach(io: t6_aa, filename: 'feelings.jpeg')
t6.music_file.attach(io: t6_mf, filename: 'feelings.mp3')
t6.save!

t7 = Track.create(
  title: "There's No Way",
  artist_id: u2.id
)
t7_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/theres_no_way.jpg')
t7_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/theres_no_way.mp3')
t7.album_art.attach(io: t7_aa, filename: 'theres_no_way.jpeg')
t7.music_file.attach(io: t7_mf, filename: 'theres_no_way.mp3')
t7.save!

t8 = Track.create(
  title: 'Paris in the Rain',
  artist_id: u2.id
)
t8_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/i_met_you.jpg')
t8_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/paris_in_the_rain.mp3')
t8.album_art.attach(io: t8_aa, filename: 'i_met_you.jpeg')
t8.music_file.attach(io: t8_mf, filename: 'paris_in_the_rain.mp3')
t8.save!



u3 = User.create(
  username: 'Travis Scott',
  email: 'travis_scott@gmail.com',
  password: '123456'
)

u3_pfp = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/profile_pics/travis_scott.png')
u3.profile_photo.attach(io: u3_pfp, filename: 'travis_scott.png')
u3.save!

t9 = Track.create(
  title: 'Goosebumps',
  artist_id: u3.id
)
t9_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/birds_in_the_trap.png')
t9_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/goosebumps.mp3')
t9.album_art.attach(io: t9_aa, filename: 'goosebumps.jpeg')
t9.music_file.attach(io: t9_mf, filename: 'goosebumps.mp3')
t9.save!

t10 = Track.create(
  title: 'Highest In The Room',
  artist_id: u3.id
)
t10_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/highest_in_the_room.png')
t10_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/highest_in_the_room.mp3')
t10.album_art.attach(io: t10_aa, filename: 'highest_in_the_room.jpeg')
t10.music_file.attach(io: t10_mf, filename: 'highest_in_the_room.mp3')
t10.save!

t11 = Track.create(
  title: 'Sicko Mode',
  artist_id: u3.id
)
t11_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/astroworld.jpeg')
t11_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/sicko_mode.mp3')
t11.album_art.attach(io: t11_aa, filename: 'sicko_mode.jpeg')
t11.music_file.attach(io: t11_mf, filename: 'sicko_mode.mp3')
t11.save!

t12 = Track.create(
  title: 'Stargazing',
  artist_id: u3.id
)
t12_aa = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/album_art/astroworld.jpeg')
t12_mf = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/music_files/stargazing.mp3')
t12.album_art.attach(io: t12_aa, filename: 'feelings.jpeg')
t12.music_file.attach(io: t12_mf, filename: 'feelings.mp3')
t12.save!
