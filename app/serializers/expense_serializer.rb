class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount
  has_many :category
end
