class CategoriesController < ApplicationController
 
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid


  def create
    category = Category.create!(name: params[:name], description: params[:description])
    render json: category
  end 

  def index
    categories = Category.all.distinct
    render json: categories
  end 

  private

  def render_record_invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end 

end
