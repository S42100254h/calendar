RSpec.describe User, type: :model do
  describe '正常系テスト' do
    context 'name, emailが入力されている' do
      let(:user) { build(:user) }

      it 'userが作られる' do
        expect(user.valid?).to eq true
      end
    end
  end
end