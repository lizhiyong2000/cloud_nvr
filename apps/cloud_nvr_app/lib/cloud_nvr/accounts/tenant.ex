defmodule CloudNvr.Accounts.Tenant do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.SoftDelete.Schema

  schema "tenants" do
    field :name, :string

    timestamps(inserted_at: :created_at)
    soft_delete_schema()
  end

  @doc false
  def changeset(tenants, attrs) do
    tenants
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end

end
