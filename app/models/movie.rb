class Movie < ApplicationRecord
    validates :title, uniqueness: true
    validates :title, :year_released, :score, :description, presence: true

    #has_many :comments
end
