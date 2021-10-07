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
  username: 'illenium',
  email: 'illenium@gmail.com',
  password: '123456'
)

u1_pfp = open('https://music-cloud-pro.s3.us-west-1.amazonaws.com/seeds/profile_pics/illenium.png')
u1.profile_photo.attach(io: u1_pfp, filename: 'illenium.png')
u1.save!