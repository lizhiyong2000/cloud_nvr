defmodule CloudNvr.Repo do
    @moduledoc false

    use Ecto.Repo,
        otp_app: :cloud_nvr,
        adapter: Ecto.Adapters.MyXQL
    use Scrivener, page_size: 10
    use Ecto.SoftDelete.Repo
#    alias CloudNvr.Device
#
#    @items [
#        %Device{
#            id: 1,
#            name: "My first item",
#            description: "A tasty item sure to please",
#            created_at: ~N[2020-01-01 00:00:00]
#        },
#        %Device{
#            id: 2,
#            name: "WarGames Bluray",
#            description: "The best computer movie of all time, now on Bluray!",
#            created_at: ~N[2018-10-15 13:39:35]
#        },
#        %Device{
#            id: 3,
#            name: "U2 - Achtung Baby on CD",
#            description: "The sound of 4 men chopping down The Joshua Tree",
#            created_at: ~N[2018-11-05 03:12:29]
#        }
#    ]

#    def all(Device), do: @items
#
#    def get!(Device, id) do
#        Enum.find(@items, fn(item) -> item.id === id end)
#    end
#
#    def get_by(Device, attrs) do
#        Enum.find(@items, fn(item) ->
#            Enum.all?(Map.keys(attrs), fn(key) ->
#                Map.get(item, key) === attrs[key]
#            end)
#        end)
#    end
end
