class AddDescriptionToMedium < ActiveRecord::Migration[5.2]
  def change
    add_column :media, :description, :text, null: false
  end
end
