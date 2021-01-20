defmodule CloudNvr.Repo do
    @moduledoc false

    use Ecto.Repo,
        otp_app: :cloud_nvr,
        adapter: Ecto.Adapters.MyXQL
        
#    alias CloudNvr.Channel
#
#    @items [
#        %Channel{
#            id: 1,
#            title: "My first item",
#            description: "A tasty item sure to please",
#            created_at: ~N[2020-01-01 00:00:00]
#        },
#        %Channel{
#            id: 2,
#            title: "WarGames Bluray",
#            description: "The best computer movie of all time, now on Bluray!",
#            created_at: ~N[2018-10-15 13:39:35]
#        },
#        %Channel{
#            id: 3,
#            title: "U2 - Achtung Baby on CD",
#            description: "The sound of 4 men chopping down The Joshua Tree",
#            created_at: ~N[2018-11-05 03:12:29]
#        }
#    ]

#    def all(Channel), do: @items
#
#    def get!(Channel, id) do
#        Enum.find(@items, fn(item) -> item.id === id end)
#    end
#
#    def get_by(Channel, attrs) do
#        Enum.find(@items, fn(item) ->
#            Enum.all?(Map.keys(attrs), fn(key) ->
#                Map.get(item, key) === attrs[key]
#            end)
#        end)
#    end
end
