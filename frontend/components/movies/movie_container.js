import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import Movie from './movie';

const mstp = (state, ownProps) => {
    const movie = state.entities.movies[ownProps.match.params.movieId];
    return {
        movie,
    }
};

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mstp, mdtp)(Movie);