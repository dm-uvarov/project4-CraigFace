class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :image_url, :price, :user_id,:likes
  # has_one :user
end
