class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :expenses
  has_many :users, though: :expenses


end
