class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount, :category_name, :category_id
  belongs_to :user

end
