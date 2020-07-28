export const fetchMovies = () => (
    $.ajax({
        method: 'GET',
        url: '/api/movies',
        error: (err) => console.log(err)
    })
);

export const fetchMovie = movieId => (
    $.ajax({
        method: 'GET',
        url: `/api/movies/${movieId}`
    })
);

export const createMovie = movie => (
    $.ajax({
        method: 'POST',
        url: '/api/movies',
        data: movie,
        contentType: false,
        processData: false
    })
);

export const updateMovie = movie => (
    $.ajax({
        method: 'PATCH',
        url: `/api/movies/${movie.id}`,
        data: movie,
        contentType: false,
        processData: false
    })
);

export const deleteMovie = movieId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/movies/${movieId}`
    })
);