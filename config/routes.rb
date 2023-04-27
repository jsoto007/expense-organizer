Rails.application.routes.draw do
  resources :users, only:[:show, :create]
  resources :expenses, only:[:show]
  get "/expenses", to: "expenses#show"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
