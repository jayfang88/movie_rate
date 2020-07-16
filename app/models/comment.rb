class Comment < ApplicationRecord
    validates :user_id, :movie_id, :body, presence: true
    
    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :movie
end
