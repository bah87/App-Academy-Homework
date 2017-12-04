require 'rails_helper'

describe User do
  subject(:user) do
    FactoryBot.build(:user,
      email: "bhiggins033@gmail.com",
      password: "my_password")
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it "creates password digest when password is provided" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates session token prior to validation" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "#reset_session_token!" do
    it "sets a new session token for user" do
      user.valid?
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end

    it "returns new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe "#is_password?" do
    it "verifies password matches actual password" do
      expect(user.is_password?("my_password")).to be true
    end

    it "verifies password is not correct" do
      expect(user.is_password?("wrong")).to be false
    end
  end

  describe "::find_by_credentials" do
    before { user.save! }

    it "returns user provided valid credentials" do
      expect(User.find_by_credentials("bhiggins033@gmail.com", "my_password")).to eq(user)
    end

    it "returns nil given bad credentials" do
      expect(User.find_by_credentials("bhiggins033@gmail.com", "wrong")).to eq(nil)
    end
  end
end