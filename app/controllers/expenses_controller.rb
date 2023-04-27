class ExpensesController < ApplicationController


  def show 
    user = User.find_by(id: session[:user_id])
    expenses = user.expenses.all
    render json: expenses
  end 

end
