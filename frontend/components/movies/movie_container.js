import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchComments } from '../../actions/comment_actions';
import Movie from './movie';

const mstp = (state, ownProps) => {
    const movieId = ownProps.match.params.movieId;
    const movie = state.entities.movies[movieId];
    const comments = state.entities.comments;
    const commentIds = Object.keys(state.entities.comments);

    return {
        movieId,
        movie,
        comments,
        commentIds
    }
};

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchComments: () => dispatch(fetchComments()),
});

export default connect(mstp, mdtp)(Movie);