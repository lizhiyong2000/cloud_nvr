defmodule CloudNvr.Accounts.User do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset
  import Pbkdf2
  use Pow.Ecto.Schema

  import Pow.Ecto.Schema.Changeset, only: [new_password_changeset: 3]
  
  schema "users" do
#    pow_user_fields()
    field :email,            :string, null: false
    field :password_hash,    :string
    field :current_password, :string, virtual: true
    field :password,         :string, virtual: true
    field :confirm_password, :string, virtual: true
    
    field :username, :string
#    field :email, :string
#    field :password, :string, virtual: true
#    field :password_hash, :string
    timestamps(inserted_at: :created_at)
  end
  
  def hash(password), do:
      hash_pwd_salt(password)
  
  def changeset(user, params \\ %{}) do
#    user
#    |> cast(params, [:username, :email])
#    |> validate_required([:username, :email])
#    |> validate_length(:username, min: 3)
#    |> unique_constraint(:username)
#    |> hash_password()
    user
    |> cast(params, [:username, :email, :password_hash])
    |> pow_user_id_field_changeset(params)
    |> pow_current_password_changeset(params)
    |> new_password_changeset(params, @pow_config)
  end
  
  def changeset_with_password(user, params \\ %{}) do
    user
    |> cast(params, [:password])
    |> validate_required(:password)
    |> validate_length(:password, min: 5)
    |> validate_confirmation(:password, required: true)
    |> hash_password()
    |> changeset(params)
  end
  
  defp hash_password(%Ecto.Changeset{changes: %{password: password}} =
      changeset) do
    changeset
    |> put_change(:password_hash, hash(password))
  end
  
  defp hash_password(changeset), do: changeset
  
  def verify_with_hash(password, hash), do:
      verify_pass(password, hash)
  
  def dummy_verify, do: no_user_verify()
end
