import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import Splash from './splash';

const mstp = state => ({
    movies: Object.values(state.entities.movies),
});

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mstp, mdtp)(Splash)