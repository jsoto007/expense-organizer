class CategoriesController < ApplicationController
 
 

  def create
    current_user = User.find(session[:user_id])
    category = current_user.categories.create(name: params[:name], description: params[:description])
    render json: category
  end 

  def index
    user = User.find_by(id: session[:user_id])
    categories = user.categories.all.distinct
    render json: categories
  end 

end
