# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, uniqueness: {scope: :track_id}
  
  belongs_to :liker,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User
  
  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

end
