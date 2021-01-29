defmodule CloudNvr.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :tenant_id, references(:tenants, on_delete: :delete_all), null: false
      
      add :username, :string
      add :email, :string
      add :password_hash, :string
      timestamps(inserted_at: :created_at)
    end

    create index(:users, [:tenant_id])
    create unique_index(:users, [:username])
  end
end
