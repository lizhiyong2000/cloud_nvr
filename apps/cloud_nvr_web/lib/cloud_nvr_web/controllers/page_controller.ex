defmodule CloudNvrWeb.PageController do
  use CloudNvrWeb, :controller

  def index(conn, _params) do
    items = CloudNvr.list_items()
    render(conn, "index.html", items: items)
  end
end
