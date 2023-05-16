class ExpensesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    user = User.find_by(id: session[:user_id])
    expenses = user.expenses.all
    render json: expenses
  end 

  def create
    expense = Expense.create(
      user_id: session[:user_id], 
      description: params[:description], 
      amount: params[:amount], 
      category_id: params[:category_id]
    )
    render json: expense

  end

  def update
    expense = Expense.find_by(id: params[:id])
    expense.update(
      description: params[:description],
      amount: params[:amount],
      category_id: params[:category_id]
    )
      render json: expense, status: :accepted
  end 

  def destroy
    expense = Expense.find_by(id: params[:id])
    expense.destroy
  end 

  private

    def expense_params
      params.permit(:description, :category_id, :amount, :session)
    end 

    def render_not_found_response
      render json: { error: "Expense not Found" }, status: :not_found
    end


end
