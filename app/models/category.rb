class Category < ApplicationRecord
  has_many :expenses, dependent: :destroy
  has_many :users, through: :expenses
end
