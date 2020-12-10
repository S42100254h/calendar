class AddTitleToSchedules < ActiveRecord::Migration[5.2]
  def change
    add_column :schedules, :title, :string
    add_column :schedules, :location, :string
    add_column :schedules, :description, :text
    add_column :schedules, :date, :date
  end
end
