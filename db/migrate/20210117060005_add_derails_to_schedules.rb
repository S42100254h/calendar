class AddDerailsToSchedules < ActiveRecord::Migration[5.2]
  def change
    add_column :schedules, :user_id, :bigint
  end
end
