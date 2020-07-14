import * as MoviesApiUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const removeMovie = movieId => ({
    type: REMOVE_MOVIE,
    movieId
});

const receiveErrors = errors => ({
    type: RECEIVE_MOVIE_ERRORS,
    errors
});

export const fetchMovies = () => dispatch => (
    MoviesApiUtil.fetchMovies()
        .then(movies => dispatch(receiveMovies(movies)))
);

export const fetchMovie = movieId => dispatch => (
    MoviesApiUtil.fetchMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
);

export const createMovie = movie => dispatch => {
    debugger;
    return MoviesApiUtil.createMovie(movie)
        .then(movie => (
            dispatch(receiveMovie(movie))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
};

export const updateMovie = movie => dispatch => (
    MoviesApiUtil.updateMovie(movie)
        .then(movie => (
            dispatch(receiveMovie(movie))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteMovie = movieId => dispatch => (
    MoviesApiUtil.deleteMovie(movieId)
        .then(() => dispatch(removeMovie(movieId)))
);