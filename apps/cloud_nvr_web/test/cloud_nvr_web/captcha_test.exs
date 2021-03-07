defmodule CloudNvrWeb.CaptchaTest do
  use ExUnit.Case, async: false
  alias CloudNvrWeb.Captcha

  doctest Captcha
  @phone "18018012345"
  @code "123456
"

  describe "create captcha" do


    test "create captcha" do

      assert %{phone: "1", code: "a"} = Captcha.new("1", "a")
    end
  end


  describe "#verify" do

    defp with_captcha(_tags) do

      captcha = Captcha.new(@phone, @code)
      IO.inspect(captcha)
      {:ok, captcha: captcha}
    end

    setup [:with_captcha]

    test "verify ok", %{captcha: captcha} do
      assert {:ok, _captcha} = Captcha.verify(captcha, @phone, @code)
    end

    test "verify mismatch", %{captcha: captcha} do
      assert {:captcha_mismatch, _captcha} = Captcha.verify(captcha, @phone, "12345")
    end

    test "verify expired", %{captcha: captcha} do
      assert {:captcha_expired, _captcha} = Captcha.verify(captcha, @phone <> "1", @code)
    end

  end

end
