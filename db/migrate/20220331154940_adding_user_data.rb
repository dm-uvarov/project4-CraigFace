class AddingUserData < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :profile_pic
    add_column :users, :profile_pic, :string, :default => "https://housing.wvu.edu/files/d/6300c2eb-d95b-4c0a-ac8c-576bf16ea03e/no-image.jpg"
    add_column :users, :total_revenue, :float, :default => 0
    add_column :users, :total_post_likes, :integer

  end
end
