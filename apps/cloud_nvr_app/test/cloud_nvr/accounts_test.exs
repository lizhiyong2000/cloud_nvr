defmodule CloudNvr.AccountsTest do
#  use CloudNvr
  use ExUnit.Case

  alias CloudNvr.Accounts

#  describe "users" do
#    alias CloudNvr.Accounts.User
#
#    @valid_attrs %{name: "some name"}
#    @update_attrs %{name: "some updated name"}
#    @invalid_attrs %{name: nil}

#    def user_fixture(attrs \\ %{}) do
#      {:ok, user} =
#        attrs
#        |> Enum.into(@valid_attrs)
#        |> Accounts.create_user()
#
#      user
#    end
#
#    test "list_users/0 returns all users" do
#      user = user_fixture()
#      assert Accounts.list_users() == [user]
#    end
#
#    test "get_user!/1 returns the user with given id" do
#      user = user_fixture()
#      assert Accounts.get_user!(user.id) == user
#    end
#
#    test "create_user/1 with valid data creates a user" do
#      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
#      assert user.name == "some name"
#    end
#
#    test "create_user/1 with invalid data returns error changeset" do
#      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
#    end
#
#    test "update_user/2 with valid data updates the user" do
#      user = user_fixture()
#      assert {:ok, %User{} = user} = Accounts.update_user(user, @update_attrs)
#      assert user.name == "some updated name"
#    end
#
#    test "update_user/2 with invalid data returns error changeset" do
#      user = user_fixture()
#      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
#      assert user == Accounts.get_user!(user.id)
#    end
#
#    test "delete_user/1 deletes the user" do
#      user = user_fixture()
#      assert {:ok, %User{}} = Accounts.delete_user(user)
#      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
#    end
#
#    test "change_user/1 returns a user changeset" do
#      user = user_fixture()
#      assert %Ecto.Changeset{} = Accounts.change_user(user)
#    end
#  end
#
#  describe "tenants" do
#    alias CloudNvr.Accounts.Tenant
#
#    @valid_attrs %{name: "some name"}
#    @update_attrs %{name: "some updated name"}
#    @invalid_attrs %{name: nil}
#
#    def tenants_fixture(attrs \\ %{}) do
#      {:ok, tenants} =
#        attrs
#        |> Enum.into(@valid_attrs)
#        |> Accounts.create_tenants()
#
#      tenants
#    end
#
#    test "list_tenants/0 returns all tenants" do
#      tenants = tenants_fixture()
#      assert Accounts.list_tenants() == [tenants]
#    end
#
#    test "get_tenants!/1 returns the tenants with given id" do
#      tenants = tenants_fixture()
#      assert Accounts.get_tenants!(tenants.id) == tenants
#    end
#
#    test "create_tenants/1 with valid data creates a tenants" do
#      assert {:ok, %Tenant{} = tenants} = Accounts.create_tenants(@valid_attrs)
#      assert tenants.name == "some name"
#    end
#
#    test "create_tenants/1 with invalid data returns error changeset" do
#      assert {:error, %Ecto.Changeset{}} = Accounts.create_tenants(@invalid_attrs)
#    end
#
#    test "update_tenants/2 with valid data updates the tenants" do
#      tenants = tenants_fixture()
#      assert {:ok, %Tenant{} = tenants} = Accounts.update_tenants(tenants, @update_attrs)
#      assert tenants.name == "some updated name"
#    end
#
#    test "update_tenants/2 with invalid data returns error changeset" do
#      tenants = tenants_fixture()
#      assert {:error, %Ecto.Changeset{}} = Accounts.update_tenants(tenants, @invalid_attrs)
#      assert tenants == Accounts.get_tenants!(tenants.id)
#    end
#
#    test "delete_tenants/1 deletes the tenants" do
#      tenants = tenants_fixture()
#      assert {:ok, %Tenant{}} = Accounts.delete_tenants(tenants)
#      assert_raise Ecto.NoResultsError, fn -> Accounts.get_tenants!(tenants.id) end
#    end
#
#    test "change_tenants/1 returns a tenants changeset" do
#      tenants = tenants_fixture()
#      assert %Ecto.Changeset{} = Accounts.change_tenants(tenants)
#    end
#  end
end
