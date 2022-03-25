class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :image_url
      t.references :user, null: false, foreign_key: true
      t.integer :price

      t.timestamps
    end
  end
end
