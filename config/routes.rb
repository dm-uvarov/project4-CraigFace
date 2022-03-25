Rails.application.routes.draw do
  
  resources :posts, only: [:create, :update, :destroy, :index, :show]
  #resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # routes for login logout and so
  #signup --> users#signup
  post "/signup",   to: "users#signup"
  # shows current user
  get "/me",        to: "users#show"

  #login in
  post "/login",    to:"sessions#login"
  #logout
  delete "/logout",to:"sessions#logout"




end
