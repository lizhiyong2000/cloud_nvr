defmodule CloudNvr.Devices.Device do
  @moduledoc false
  #    defstruct [:id, :name, :description, :created_at]
  
  use Ecto.Schema
  
  import Ecto.Changeset
  
  schema "devices" do
    field :name, :string
    field :description, :string
#    field :created_at, :utc_datetime
    timestamps(inserted_at: :created_at)
  end
  
  def changeset(item, params \\ %{}) do
    item
    |> cast(params, [:name, :description,])
    |> validate_required(:name)
    |> validate_length(:name, min: 3)
    |> validate_length(:description, max: 200)
      #        |> validate_change(:ends_at, &validate/2)
  end
end
