Rails.application.routes.draw do
  namespace :api do
    resources :menus do
      resources :dishes
    end
  end
end
