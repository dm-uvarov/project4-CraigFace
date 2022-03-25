class User < ApplicationRecord
    has_secure_password
    has_many :posts
    validates :password, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
end
