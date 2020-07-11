import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mSTP = state => ({
    movies: Object.values(state.entities.movies),
    errors: state.errors.movie
});

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mSTP, mDTP)(MovieIndex);