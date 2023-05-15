class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end 

  def show 
    current_user = User.find(session[:user_id])
    render json: current_user
  end 
  
  def index
    current_user = User.find(session[:user_id])
    user_expenses = current_user.categories.distinct
    render json: current_user
  end

  private

  def user_params
    params.permit(:username, :password)

  end 
end
