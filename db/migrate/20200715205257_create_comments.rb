class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :movie_id
      t.text :body
      t.timestamps
    end
    add_index :comments, :movie_id
  end
end
