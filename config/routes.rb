Rails.application.routes.draw do
  resources :users, only:[:show, :create, :index]
  resources :expenses, only:[:show, :create, :index]
  resources :categories, only:[:index, :create]
  get "/expense_by_category", to: "categories#expense_by_category"
  get "/auth", to: "users#show"
  # get "/categories", to: "categories#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
