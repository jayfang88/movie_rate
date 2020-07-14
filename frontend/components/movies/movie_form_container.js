import { connect } from 'react-redux';
import { fetchMovies, createMovie } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieForm from './movie_form';

const mstp = (state, ownProps) => ({
    movie: {
        title: '',
        yearReleased: '',
        score: 0,
        description: '',
        errors: {}
    },
    errors: state.errors.movie,
});

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    createMovie: movie => dispatch(createMovie(movie)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(MovieForm);