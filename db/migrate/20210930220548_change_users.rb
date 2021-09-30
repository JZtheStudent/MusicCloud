class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_photo_url, :string

  end
end
