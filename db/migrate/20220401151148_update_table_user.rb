class UpdateTableUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :is_active, :boolean, :default => false, null: false
  end
end
