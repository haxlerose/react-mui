Rails.application.routes.draw do
  root "home#search"
  get 'results', to: 'home#results'
end
