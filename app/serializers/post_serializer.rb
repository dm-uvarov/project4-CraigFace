class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :image_url, :price
  has_one :user
end
