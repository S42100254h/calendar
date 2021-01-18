require 'rails_helper'

RSpec.describe 'Api::V1::Schedules', type: :request do
  describe 'GET /api/v1/schedules' do
    subject { get(api_v1_schedules_path) }

    before do
      create_list(:schedule, 2)
    end

    it 'スケジュールの一覧を取得できる' do
      subject
      res = JSON.parse(response.body)
      expect(res.length).to eq 2
      expect(res[0].keys).to eq ['id', 'title', 'location', 'description', 'date', 'user']
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/v1/schedule/:id' do
    subject { get(api_v1_schedule_path(schedule_id)) }

    context '指定したidのスケジュールが存在する場合' do
      let(:schedule) { create(:schedule, id: 1) }
      let(:schedule_id) { schedule.id }

      it 'スケジュールの詳細を取得できる' do
        subject
        res = JSON.parse(response.body)
        expect(res['id']).to eq 1
        expect(res['title']).to eq schedule.title
        expect(res['location']).to eq schedule.location
        expect(res['description']).to eq schedule.description
        expect(res['date']).to eq schedule.date.strftime('%Y-%m-%d')
        expect(res.keys).to eq ['id', 'title', 'location', 'description', 'date', 'user']
        expect(response).to have_http_status(200)
      end
    end

    context '指定したidのスケジュールが存在しない場合' do
      let(:schedule_id) { 9999 }

      it 'スケジュールの詳細を取得できない' do
        expect { subject }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end

  describe 'POST /api/v1/schedules' do
    subject { post(api_v1_schedules_path, params: params) }

    let(:params) { { schedule: attributes_for(:schedule) } }
    let!(:current_user) { create(:user) }

    it 'current_userに紐づけられたスケジュールが作成される' do
      expect { subject }.to change { current_user.schedules.count }.by(1)
      expect(response).to have_http_status(200)
    end
  end

  describe 'PATCH /api/v1/schedules/:id' do
    subject { patch(api_v1_schedule_path(schedule_id), params: params) }

    let(:params) { { schedule: attributes_for(:schedule) } }
    let!(:current_user) { create(:user) }
    let!(:schedule) { create(:schedule, user: current_user) }
    let(:schedule_id) { schedule.id }

    it 'current_userに紐づけられたスケジュールが更新される' do
      expect { subject }.to change { current_user.schedules.count }.by(0)
      expect(response).to have_http_status(200)
    end
  end
end
