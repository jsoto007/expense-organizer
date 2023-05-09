class CategoriesController < ApplicationController
 
 

  def create
    category = Category.create(name: params[:name], description: params[:description])
    render json: category
  end 

  def index
    user = User.find_by(id: session[:user_id])
    categories = user.categories.all.distinct
    render json: categories
  end 

  def expense_by_category
    current_user = User.find(session[:user_id])
    cat_expenses = current_user.categories
    
    render json: cat_expenses, include: ['expenses', 'expenses.users']

  end 



end
