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

  describe '異常系テスト' do
    context 'titleが入力されていない' do
      let(:schedule) { build(:schedule, title: nil) }
      
      it 'スケジュールが作られない' do
        schedule.valid?
        expect(schedule.errors.messages[:title]).to include "can't be blank"
      end
    end

    context 'dateが入力されていない' do
      let(:schedule) { build(:schedule, date: nil) }

      it 'スケジュールが作られない' do
        schedule.valid?
        expect(schedule.errors.messages[:date]).to include "can't be blank"
      end
    end

    context 'titleが51文字以上' do
      let(:schedule) { build(:schedule, title: "a" * 51) }
      it 'スケジュールが作られない' do
        schedule.valid?
        expect(schedule.errors.messages[:title]).to include "is too long (maximum is 50 characters)"
      end
    end

    context 'locationが51文字以上' do
      let(:schedule) { build(:schedule, location: "a" * 51) }

      it 'スケジュールが作られない' do
        schedule.valid?
        expect(schedule.errors.messages[:location]).to include "is too long (maximum is 50 characters)"
      end
    end
  end
end
