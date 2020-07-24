# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Comment.delete_all
Movie.delete_all
User.delete_all

u1 = User.create!(
    username: 'jfang',
    name: 'Justin',
    password: 'password'
)

m1 = Movie.create!(
    title: 'Captain America: The First Avenger',
    year_released: '2011',
    score: 0.0,
    description: 'Steve Rogers becomes Captain America',
)

m2 = Movie.create!(
    title: 'Captain Marvel',
    year_released: '2019',
    score: 0.0,
    description: 'Carol Danvers discovers herself';
)