class User < ApplicationRecord
  has_many :expenses
  has_many :categories, through: :expenses

  validates :username, presence: true, :uniqueness => true
  validates :password, presence: true

  has_secure_password
end
