class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :category

  def category_name
    self.category.name
  end 

  def category_id
    self.category.id
  end 

  validates :description, presence: true
  validates :amount, presence: true


end
