class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :year_released, null: false
      t.string :type_of, null: false
      t.float :score, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
