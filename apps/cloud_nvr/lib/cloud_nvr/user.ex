defmodule CloudNvr.User do
    @moduledoc false
    use Ecto.Schema
    import Ecto.Changeset
    import Pbkdf2

    schema "users" do
        field :username, :string
        field :email, :string
        field :password, :string, virtual: true
        field :hashed_password, :string
        timestamps(inserted_at: :created_at)
    end

    def hash(password), do:
        hash_pwd_salt(password)

    def changeset(user, params \\ %{}) do
        user
        |> cast(params, [:username, :email])
        |> validate_required([:username, :email, :hashed_password])
        |> validate_length(:username, min: 3)
        |> unique_constraint(:username)
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
        |> put_change(:hashed_password, hash(password))
    end
    
    defp hash_password(changeset), do: changeset

    def verify_with_hash(password, hash), do:
        verify_pass(password, hash)

    def dummy_verify, do: no_user_verify()
end
