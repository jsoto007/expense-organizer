# About the App

This program is an expense database allowing a user to request and upload information to/from a server. The app enables users to add expenses in the Add Expense from the navigation bar. 
The user can see the expenses under expenses when selected in the navigation bar. The user can edit, read, or delete any expense, which will update state, and the component will re-render. The user can add new categories under categories in the navigation bar, which do not belong to the user. Categories are visible to all users, and the a user will appear under a category if the user has expenses under that category. 

This app renders only one index.html file in which different components are mounted and unmounted depending on the user's activity. Having one HTML file allows for a more reactive app and smooth transitions.

# Ruby on Rails backend

This app runs with a Rails backed using the following models: 

User >- Expenses -< Category

User has_many: expenses & and many categories through expenses
Category has_many: expenses & and many users through expenses

This API sends back JSON formatted data. Category: allows reading and creating requests. User: allows read, create,  and expenses: allow full CRUD.


# Requirements to install and run this program.

## Backend 
Node Package Manager.
Access to a terminal.
Internet browser.


### Backend instructions 
•	Open and copy the repo from GitHub.
•	Open the terminal and navigate to the directory you want to clone the program.
•	Use the git clone command, paste the GitHub repo, and press enter.
•	CD (change directory) into the file.
•	Open the file.
•	Run bundle install in the terminal to install all dependencies.
- run rails db:migrate db:seed (to set up the migrations and create seed data for the app)

### Frontend Instructions
•	CD (change directory) into the client.
•	Run npm install in the terminal to install all dependencies.
•	Run npm start  in your terminal to open the page in your internet browser.

•	Ruby
•	Access to a terminal.
•	Internet browser.
•	Node Package Manager.

Resources
Faker was used to generate fake data: https://github.com/faker-ruby/faker
Active record migrations: https://guides.rubyonrails.org/active_record_migrations.html
Active Record associatoins: https://guides.rubyonrails.org/association_basics.html

