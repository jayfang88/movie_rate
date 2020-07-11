class FixMediaColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :media, :type, :type_of
  end
end
