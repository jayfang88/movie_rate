class Comment < ApplicationRecord
    validates :user_id, :movie_id, :body, presence: true
    
    belongs_to :user
    belongs_to :movie
end
