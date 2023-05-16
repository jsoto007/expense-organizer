class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount
  belongs_to :user
  belongs_to :category

end
