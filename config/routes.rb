Rails.application.routes.draw do
  root :to => 'session#new'

  resources :users
  resources :airplanes
  resources :flights do
    resources :reservations
  end
  


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
