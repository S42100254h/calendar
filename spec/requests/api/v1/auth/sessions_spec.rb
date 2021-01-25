require "rails_helper"

RSpec.describe "Api::V1::Auth::Sessions", type: :request do
  describe "POST /api/v1/auth/sign_in" do
    subject { post(api_v1_user_session_path, params: params) }

    context "正しい情報が送られたとき" do
      let(:params) { { email: user.email, password: user.password } }
      let!(:user) { create(:user) }

      it "サインインできる" do
        subject
        headers = response.headers
        expect(headers["uid"]).to be_present
        expect(headers["client"]).to be_present
        expect(headers["access-token"]).to be_present
        expect(response).to have_http_status(200)
      end
    end

    context "emailが間違っていたとき" do
      let(:params) { { email: Faker::Internet.email, password: user.password } }
      let!(:user) { create(:user) }

      it "サインインできない" do
        subject
        headers = response.headers
        expect(headers["uid"]).to be nil
        expect(headers["client"]).to be nil
        expect(headers["access-token"]).to be nil
        expect(response).to have_http_status(401)
      end
    end

    context "passwordが間違っていたとき" do
      let(:params) { { email: user.email, password: Faker::Internet.password(min_length: 6, max_length: 128) } }
      let!(:user) { create(:user) }

      it "サインインできない" do
        subject
        headers = response.headers
        expect(headers["uid"]).to be nil
        expect(headers["client"]).to be nil
        expect(headers["access-token"]).to be nil
        expect(response).to have_http_status(401)
      end
    end
  end

  describe "DELETE /api/v1/auth/sign_out" do
    subject { delete(destroy_api_v1_user_session_path, headers: headers) }

    context "正しい情報が送られたとき" do
      let!(:user) { create(:user) }
      let(:headers) { user.create_new_auth_token }

      it "サインアウトできる" do
        subject
        headers = response.headers
        expect(headers["uid"]).to be nil
        expect(headers["client"]).to be nil
        expect(headers["access-token"]).to be nil
        expect(response).to have_http_status(200)
      end
    end
  end
end
