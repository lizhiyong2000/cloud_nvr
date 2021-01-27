defmodule CloudNvr do
    @moduledoc """
    Documentation for `CloudNvr`.
    """
    
    alias CloudNvr.{Channel, User, Repo}
    
    @repo Repo

    def list_items do
        @repo.all(Channel)
    end

    def get_item(id) do
        @repo.get!(Channel, id)
    end

    def get_item_by(attrs) do
        @repo.get_by(Channel, attrs)
    end



    def insert_item(attrs) do
        Channel
        |> struct(attrs)
        |> @repo.insert()
    end

    def delete_item(%Channel{} = item), do: @repo.delete(item)

    def update_item(%Channel{} = item, updates) do
        item
        |> Channel.changeset(updates)
        |> @repo.update()
    end


    def get_user(id), do: @repo.get!(User, id)

    def new_user, do: User.changeset_with_password(%User{})

    def insert_user(params) do
        %User{}
        |> User.changeset_with_password(params)
        |> @repo.insert
    end

    def get_user_by_username_and_password(username, password) do
        with user when not is_nil(user) <- @repo.get_by(User, %{username:
            username}),
             true <- User.verify_with_hash(password, user.hashed_password) do
            user
        else
            _ -> User.dummy_verify
        end
    end
end
