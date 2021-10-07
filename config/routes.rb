Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do 
      resources :tracks, only: [:create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index]

    get "/users/:id/tracks", to: 'users#tracks'
  end
  
  

end
