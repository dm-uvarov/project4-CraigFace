class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :image_url, :price, :user_id,:likes
  belongs_to :user, serializer: PostUserSerializer
  


  # def username 
  #   User.where()
  # end
end
