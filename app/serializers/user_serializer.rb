class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :expenses
  has_many :categories

end
