defmodule CloudNvrWeb.TenantView do
  use CloudNvrWeb, :view
  alias CloudNvrWeb.TenantView

  def render("index.json", %{tenants: tenants}) do
    %{data: render_many(tenants, TenantView, "tenant.json")}
  end

  def render("show.json", %{tenant: tenant}) do
    %{data: render_one(tenant, TenantView, "tenant.json")}
  end

  def render("tenant.json", %{tenant: tenant}) do
    %{id: tenant.id,
      name: tenant.name}
  end
end
