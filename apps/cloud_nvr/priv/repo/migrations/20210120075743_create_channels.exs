defmodule CloudNvr.Repo.Migrations.CreateChannels do
  use Ecto.Migration

  def change do
    create table("channels") do
      add :title, :string
      add :description, :string
      add :created_at, :utc_datetime
      timestamps()
    end
  end
end
