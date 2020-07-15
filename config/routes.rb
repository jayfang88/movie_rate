Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :show, :update, :destroy]
  end
end
