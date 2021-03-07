defmodule CloudNvrWeb.Captcha do
  @moduledoc false

  def new(phone, code) do
    %{phone: phone, code: code}
  end

  def verify(%{phone: phone, code: code} = captcha, phone, code) do
    {:ok, captcha}
  end

  def verify(%{phone: phone} = captcha, phone, _code) do
    {:captcha_mismatch, captcha}
  end

  def verify(captcha, _phone, _code) do
    {:captcha_expired, captcha}
  end
end
