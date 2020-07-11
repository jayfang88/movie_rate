class Medium < ApplicationRecord
    validates :title, uniqueness: true
    validates :title, :year_released, :type_of, :score, :description, presence: true

    # has_many :comments
end
