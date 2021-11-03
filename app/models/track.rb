# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
  validates :title, :artist_id, presence: true
  validate :ensure_album_art
  validate :ensure_music_file
  
  has_one_attached :album_art 
  has_one_attached :music_file

  def ensure_album_art 
    unless self.album_art.attached?
      errors[:album_art] << "Must be attached"
    end
  end
  
  def ensure_music_file
    unless self.music_file.attached?
      errors[:album_art] << "Must be attached"
    end
  end

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User 

  has_many :comments,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment 

  has_many :commenters,
    through: :comments,
    source: :commenter

end
