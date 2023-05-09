class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    user = User.create!(user_params)
    render json: user

  end 

  def show 
    current_user = User.find(session[:user_id])
    render json: current_user
  end 
  
  def index
    current_user = User.find(session[:user_id])
    # user_expenses = current_user.expenses.all
    render json: current_user
  end

  private

  def user_params
    params.permit(:username, :password)

  end 
end
