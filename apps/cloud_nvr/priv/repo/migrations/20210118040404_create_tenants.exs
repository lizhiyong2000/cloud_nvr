defmodule CloudNvr.Repo.Migrations.CreateTenants do
  use Ecto.Migration
  import Ecto.SoftDelete.Migration

  def change do
    create table(:tenants) do
      add :name, :string

      timestamps(inserted_at: :created_at)
      soft_delete_columns()
    end

  end
end
