Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do 
      resources :songs, only: [:create]
    end
    resource :session, only: [:create, :destroy]
  end
  
  

end
