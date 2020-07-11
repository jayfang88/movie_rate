class RemoveColumnFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :type_of
  end
end
