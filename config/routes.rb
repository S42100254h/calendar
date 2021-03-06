# frozen_string_literal: true

Rails.application.routes.draw do
  namespace "api", format: "json" do
    namespace "v1" do
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/auth/registrations"
      }
      resources :schedules
    end
  end
end
