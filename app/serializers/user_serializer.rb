class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_pic,:total_revenue,:total_post_likes
  has_many :posts
end
