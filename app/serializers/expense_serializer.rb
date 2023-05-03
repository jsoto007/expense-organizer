class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount, :summary
  belongs_to :category

  def summary 
    "#{self.object.description[0..15]...}"
  end

end
