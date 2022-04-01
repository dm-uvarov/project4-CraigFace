class User < ApplicationRecord
    has_secure_password
    has_many :posts
    validates :password, {presence: true, on: :create}
    validates :username, presence: true
    validates :username, uniqueness: true

    has_many :messages
    has_many :chats,through: :messages
    
end
