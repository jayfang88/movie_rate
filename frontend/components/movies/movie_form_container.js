import { connect } from 'react-redux';
import { fetchMovies, createMovie } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieForm from './movie_form';

const mstp = (state, ownProps) => ({
    movie: {
        title: '',
        year_released: '',
        score: 0,
        description: '',
        photoFile: null
    },
    errors: state.errors.movie,
});

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    createMovie: movie => dispatch(createMovie(movie)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(MovieForm);