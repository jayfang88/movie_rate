json.extract! movie, :id, :title, :year_released, :score, :description

if (movie.photo.attached?)
    json.photoUrl url_for(movie.photo)
else
    json.photoUrl 'https://movierate-dev.s3-us-west-1.amazonaws.com/generic-movie.jpg'
end