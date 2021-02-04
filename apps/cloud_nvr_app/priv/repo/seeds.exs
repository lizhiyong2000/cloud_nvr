# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Noven.Repo.insert!(%Noven.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
default_user = "lizhiyong"
default_email = "lizhiyong2000@gmail.com"
default_password = "password123456"
alias CloudNvr.Repo
alias CloudNvr.Accounts
{:ok, user} =
    CloudNvr.Accounts.create_user(%{
        username: default_user,
        email: default_email,
        password: default_password,
        password_confirmation: default_password,
        tenant_name: default_user
    })

{:ok, device} =
    %CloudNvr.Devices.Device{
        name: "test",
        description: "abcdef",
        tenant_id: user.tenant.id
    }
    |> Repo.insert()
 
{:ok, tenant} =  user.tenant |> Accounts.delete_tenant()

#token = Noven.Devices.generate_token(device)
#
#IO.warn(
#    """
#    User Credentials: #{user.email}:#{default_password}
#    Device Token: #{token}
#    """,
#    []
#)
