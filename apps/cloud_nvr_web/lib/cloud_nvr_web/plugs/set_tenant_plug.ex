defmodule CloudNvrWeb.Plugs.SetCurrentTenant do
    import Plug.Conn, only: [assign: 3]
    
    alias CloudNvr.Repo
    alias CloudNvr.Accounts.User
    
    def init(options), do: options
    
    def call(conn, _opts) do
        case conn.assigns[:current_user] do
            %User{} = user ->
                %User{tenant: tenant} = Repo.preload(user, :tenant)
                assign(conn, :current_tenant, tenant)
            _ ->
                assign(conn, :current_tenant, nil)
        end
    end
end