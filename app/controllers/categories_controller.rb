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



end
