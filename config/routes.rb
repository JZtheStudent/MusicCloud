Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do 
      resources :tracks, only: [:update, ]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :create, :destroy] do 
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]

    get "/users/:id/tracks", to: 'users#tracks'
    get "/users/:id/liked_tracks", to: 'users#liked_tracks'
  end
  
  

end
