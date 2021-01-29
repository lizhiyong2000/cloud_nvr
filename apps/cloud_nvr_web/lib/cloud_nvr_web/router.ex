defmodule CloudNvrWeb.Router do
  use CloudNvrWeb, :router

  use Pow.Phoenix.Router
  
  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
#    plug CloudNvrWeb.Authenticator
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug CloudNvrWeb.Plugs.APIAuthPlug, otp_app: :cloud_nvr
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: CloudNvrWeb.Plugs.APIAuthErrorHandler
    plug CloudNvrWeb.Plugs.SetCurrentTenant
  end
  

#  scope "/", CloudNvrWeb do
#    pipe_through :browser
#
#    get "/", PageController, :index
##    resources "/users", UserController, only: [:show, :new, :create]
##    get "/login", SessionController, :new
##    post "/login", SessionController, :create
##    delete "/logout", SessionController, :delete
#  end

#  scope "/" do
#    pipe_through :api
##    pow_routes()
#  end

  scope "/api", CloudNvrWeb, as: :api do
    pipe_through :api
  
    resources "/registration", RegistrationController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew
  end
  
  # Other scopes may use custom stacks.
   scope "/api", CloudNvrWeb do
     pipe_through [:api, :api_protected]
     resources "/tenants", TenantController, except: [:new, :edit]
     resources "/users", UserController, except: [:new, :edit]
     resources "/devices", DeviceController, except: [:new, :edit]
   end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: CloudNvrWeb.Telemetry
    end
  end
end
