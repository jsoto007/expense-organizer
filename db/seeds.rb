
puts "🌱🌱🌱🌱🌱 Seeding spices..."

User.destroy_all
Expense.destroy_all
Category.destroy_all

User.create(username: "one", password: "123")
User.create(username: "two", password: "123")
User.create(username: "three", password: "123")


Category.create(name: "Utilities", description: "Utilities include telecomunications, electric, gas, water, ect...")
Category.create(name: "Transportation", description: "Transportation includes: parking, bus fair, meter, gas, tolls, ect...")
Category.create(name: "Food", description: "Food includes: Groceries, Soft Drinks, Eating out, ect..")
Category.create(name: "Entertaiment", description: "Entertainment includes: Concerts, Movie tickets, Subscriptions to streaminig platforms, ect..")


50.times do
  category = Category.order('RANDOM()').first
  user = User.order('RANDOM()').first
  
  expense = Expense.create(
    description: Faker::Movie.title,
    amount: Faker::Number,
    date: Faker::Date.between(from: '2020-01-23', to: '2023-05-25'),
    user_id: user.id,
    category_id: category.id
  )
end


puts "✅✅✅✅ Done seeding!"