defmodule CloudNvr.Repo.Migrations.CreateDevices do
  use Ecto.Migration

  def change do
    create table(:devices) do
      add :tenant_id, references(:tenants, on_delete: :delete_all), null: false
      add :name, :string
      add :description, :string
      timestamps(inserted_at: :created_at)
    end
  end
  
end
