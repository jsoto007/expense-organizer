class CategoriesController < ApplicationController
 
  def create
    current_user = User.find(session[:user_id])
    category = current_user.categories.create(name: params[:name], description: params[:description])
    render json: category
  end 

  def index
    categories = Category.all.distinct
    render json: categories
  end 

end
