defmodule CloudNvr do
    @moduledoc """
    Documentation for `CloudNvr`.
    """
    
    alias CloudNvr.{Channel, Repo}
    
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
end
