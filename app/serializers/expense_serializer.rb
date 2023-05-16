class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount, :category_name
  belongs_to :user
  belongs_to :category

end
