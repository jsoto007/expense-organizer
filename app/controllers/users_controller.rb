class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end 

  def show 
    current_user = find_user
    render json: current_user 
  end 
  
  #to be deleted currently not using
  def index
    current_user = find_user
    user_expenses = current_user.categories.distinct
    render json: current_user
  end


  private

  def user_params
    params.permit(:username, :password)
  end 

  def find_user
    User.find_by(id: session[:user_id])
  end 

  def render_not_found_response
    render json: { error: "User not Found" }, status: :not_found
  end


end
