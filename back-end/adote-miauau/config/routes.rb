Rails.application.routes.draw do
  devise_for :users, only: []

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      collection do
        post :sign_in, controller: :sessions, action: :create
      end
    end

    resources :publications
  end
end
