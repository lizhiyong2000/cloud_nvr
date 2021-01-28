defmodule CloudNvrWeb.UserView do
  use CloudNvrWeb, :view
  alias CloudNvrWeb.UserView

  def render("index.json", %{users: page_users}) do
#    %{data: render_many(users, UserView, "user.json")}
   %{
      data: render_many(page_users.entries, UserView, "user.json"),
      page_number: page_users.page_number,
      page_size: page_users.page_size,
      total_num: page_users.total_entries,
      total_pages: page_users.total_pages
    }
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.username}
  end
end
