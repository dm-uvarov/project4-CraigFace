class User < ApplicationRecord
    has_secure_password
    has_many :posts
    validates :password, {presence: true, on: :create}
    validates :username, presence: true
    validates :username, uniqueness: true
end
