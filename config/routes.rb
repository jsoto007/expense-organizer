Rails.application.routes.draw do
  resources :users, only:[:show, :create, :index]
  resources :expenses
  resources :categories, only:[:index, :create]

  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  get "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

