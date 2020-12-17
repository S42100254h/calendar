class Schedule < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { max: 50 }
  validates :location, presence: true, length: { max: 50 }
  validates :description, presence: true
  validates :date, presence: true
end
