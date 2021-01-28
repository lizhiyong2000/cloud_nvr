defmodule CloudNvr.Repo.Migrations.CreateDevices do
  use Ecto.Migration

  def change do
    create table(:devices) do
      add :name, :string
      add :description, :string
      timestamps(inserted_at: :created_at)
    end
  end
  
end
