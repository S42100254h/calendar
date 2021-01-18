require 'rails_helper'

RSpec.describe Schedule, type: :model do
  describe '正常系テスト' do
    context 'title, dateが入力されている' do
      let(:schedule) { create(:schedule) }

      it 'スケジュールが作られる' do
        expect(schedule.valid?).to eq true
      end
    end
  end
end
