defmodule CloudNvr.Devices.Device do
  @moduledoc false
  #    defstruct [:id, :name, :description, :created_at]
  
  use Ecto.Schema
  import Ecto.Changeset

  alias CloudNvr.Accounts.Tenant
  
  schema "devices" do
    field :name, :string
    field :description, :string
#    field :created_at, :utc_datetime
    timestamps(inserted_at: :created_at)

    belongs_to :tenant, Tenant
  end
  
  def changeset(item, params \\ %{}) do
    item
    |> cast(params, [:name, :description, :tenant_id])
    |> validate_required(:name)
    |> validate_length(:name, min: 3)
    |> validate_length(:description, max: 200)
    |> assoc_constraint(:tenant)
      #        |> validate_change(:ends_at, &validate/2)
  end
end
