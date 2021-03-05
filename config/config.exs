# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of the Config module.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
import Config

config :cloud_nvr_web,
  generators: [context_app: false]
  
config :cloud_nvr_app, ecto_repos: [CloudNvr.Repo]

config :cloud_nvr_app, CloudNvr.Repo,
  database: "cloud_nvr",
  username: "root",
  password: "",
  hostname: "localhost",
  port: "3306",
  url: "mysql://root@localhost:3306/cloud_nvr"

#config :cloud_nvr_web, ecto_repos: [CloudNvr.Repo]

config :cloud_nvr_web, :generators,
       context_app: :cloud_nvr

# Configures pow
config :cloud_nvr_app, :pow,
       user: CloudNvr.Accounts.User,
       repo: CloudNvr.Repo
       
config :triplex, repo: CloudNvr.Repo

# Configures the endpoint
config :cloud_nvr_web, CloudNvrWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5yubF4LFUpZ6/voxeYe7k/9fibsvdWLostis57/TSBLEg3GwVAZSkgZTn/JZrtaU",
  render_errors: [view: CloudNvrWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: CloudNvrWeb.PubSub,
  live_view: [signing_salt: "P+B3MdfE"]

# Sample configuration:
#
#     config :logger, :console,
#       level: :info,
#       format: "$date $time [$level] $metadata$message\n",
#       metadata: [:user_id]
#

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason



# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
