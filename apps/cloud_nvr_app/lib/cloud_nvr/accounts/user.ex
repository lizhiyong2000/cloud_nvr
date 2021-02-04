defmodule CloudNvr.Accounts.User do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset
  import Pbkdf2
  use Pow.Ecto.Schema

  import Pow.Ecto.Schema.Changeset, only: [new_password_changeset: 3]

  alias CloudNvr.Accounts
  alias CloudNvr.Accounts.Tenant
  
  schema "users" do
#    pow_user_fields()

    
    field :email,            :string, null: false
    field :password_hash,    :string
    field :current_password, :string, virtual: true
    field :password,         :string, virtual: true
    field :confirm_password, :string, virtual: true
    
    field :username, :string
    
    # for tenant
    field :tenant_name, :string, virtual: true
    belongs_to :tenant, Tenant

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
    |> cast(params, [:username, :email, :password_hash, :tenant_name])
    |> pow_user_id_field_changeset(params)
    |> pow_current_password_changeset(params)
    |> new_password_changeset(params, @pow_config)
    |> create_tenant_for_new_user(user)
    |> assoc_constraint(:tenant)
  end
  
#  def changeset_with_password(user, params \\ %{}) do
#    user
#    |> cast(params, [:password])
#    |> validate_required(:password)
#    |> validate_length(:password, min: 5)
#    |> validate_confirmation(:password, required: true)
#    |> hash_password()
#    |> changeset(params)
#  end
#
#  defp hash_password(%Ecto.Changeset{changes: %{password: password}} =
#      changeset) do
#    changeset
#    |> put_change(:password_hash, hash(password))
#  end
#
#  defp hash_password(changeset), do: changeset
#
#  def verify_with_hash(password, hash), do:
#      verify_pass(password, hash)
#
#  def dummy_verify, do: no_user_verify()

  defp create_tenant_for_new_user(%{valid?: true,  changes: %{tenant_name: tenant_name}} = changeset, %{tenant_id: nil} = user) do
    with {:ok, tenant} <- Accounts.create_tenant(%{name: tenant_name}) do
      put_assoc(changeset, :tenant, tenant)
    else
      _ -> changeset
    end
  end
  
  defp create_tenant_for_new_user(changeset, _) do
      changeset
  end
  
end
