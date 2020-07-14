import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mSTP = state => {
    return{
    movies: Object.values(state.entities.movies),
    errors: state.errors.movie
}};

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: movieId => dispatch(deleteMovie(movieId))
});

export default connect(mSTP, mDTP)(MovieIndex);