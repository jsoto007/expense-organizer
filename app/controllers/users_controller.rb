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
    render json: current_user, include: ['expenses', 'expenses.category']
  end


  def expense_by_category
    current_user = User.find(session[:user_id])
    render json: current_user, include: ['categoris', 'categories.expenses']

  end 


  private

  def user_params
    params.permit(:username, :password)

  end 
end
