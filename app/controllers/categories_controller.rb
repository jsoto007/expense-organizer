class CategoriesController < ApplicationController

  def create
    category = Category.create(name: params[:name], description: params[:description])
    render json: category
  end 

  def show
    categories = Category.all
    render json: categories
  end 
end
