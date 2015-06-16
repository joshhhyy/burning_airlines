# == Route Map
#
#                  Prefix Verb   URI Pattern                                         Controller#Action
#                    root GET    /                                                   session#new
#                   users GET    /users(.:format)                                    users#index
#                         POST   /users(.:format)                                    users#create
#                new_user GET    /users/new(.:format)                                users#new
#               edit_user GET    /users/:id/edit(.:format)                           users#edit
#                    user GET    /users/:id(.:format)                                users#show
#                         PATCH  /users/:id(.:format)                                users#update
#                         PUT    /users/:id(.:format)                                users#update
#                         DELETE /users/:id(.:format)                                users#destroy
#               airplanes GET    /airplanes(.:format)                                airplanes#index
#                         POST   /airplanes(.:format)                                airplanes#create
#            new_airplane GET    /airplanes/new(.:format)                            airplanes#new
#           edit_airplane GET    /airplanes/:id/edit(.:format)                       airplanes#edit
#                airplane GET    /airplanes/:id(.:format)                            airplanes#show
#                         PATCH  /airplanes/:id(.:format)                            airplanes#update
#                         PUT    /airplanes/:id(.:format)                            airplanes#update
#                         DELETE /airplanes/:id(.:format)                            airplanes#destroy
#     flight_reservations GET    /flights/:flight_id/reservations(.:format)          reservations#index
#                         POST   /flights/:flight_id/reservations(.:format)          reservations#create
#  new_flight_reservation GET    /flights/:flight_id/reservations/new(.:format)      reservations#new
# edit_flight_reservation GET    /flights/:flight_id/reservations/:id/edit(.:format) reservations#edit
#      flight_reservation GET    /flights/:flight_id/reservations/:id(.:format)      reservations#show
#                         PATCH  /flights/:flight_id/reservations/:id(.:format)      reservations#update
#                         PUT    /flights/:flight_id/reservations/:id(.:format)      reservations#update
#                         DELETE /flights/:flight_id/reservations/:id(.:format)      reservations#destroy
#                 flights GET    /flights(.:format)                                  flights#index
#                         POST   /flights(.:format)                                  flights#create
#              new_flight GET    /flights/new(.:format)                              flights#new
#             edit_flight GET    /flights/:id/edit(.:format)                         flights#edit
#                  flight GET    /flights/:id(.:format)                              flights#show
#                         PATCH  /flights/:id(.:format)                              flights#update
#                         PUT    /flights/:id(.:format)                              flights#update
#                         DELETE /flights/:id(.:format)                              flights#destroy
#                   login GET    /login(.:format)                                    session#new
#                         POST   /login(.:format)                                    session#create
#                         DELETE /login(.:format)                                    session#destroy
#

Rails.application.routes.draw do
  root :to => 'session#new'

  resources :users
  resources :airplanes do
    resources :flights do
      resources :reservations
    end
  end
  


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
