class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :category

  def category_name
    self.category.name
  end 
  
end
