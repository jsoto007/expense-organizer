class CategoriesController < ApplicationController
 
  def create
    category = Category.create(name: params[:name], description: params[:description])
    render json: category
  end 

  def index
    categories = Category.all.distinct
    render json: categories
  end 

end
