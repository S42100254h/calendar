class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules, &:timestamps
  end
end
