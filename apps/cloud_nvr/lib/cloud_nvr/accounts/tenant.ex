defmodule CloudNvr.Accounts.Tenant do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tenants" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(tenants, attrs) do
    tenants
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
