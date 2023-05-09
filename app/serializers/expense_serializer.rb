class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount
  belongs_to :user
  belongs_to :category

  # def summary 
  #   "#{self.object.description[0..15]...}"
  # end

end
