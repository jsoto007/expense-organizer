class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.integer :user_id
      t.integer :category_id
      t.datetime :date
      t.string :description
      t.integer :amount

      t.timestamps
    end
  end
end
