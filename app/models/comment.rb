# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  commenter_id :integer          not null
#  track_id     :integer          not null
#  body         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
  validates :commenter_id, uniqueness: {scope: :track_id}

  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

end
