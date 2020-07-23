import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import Movie from './movie';

const mstp = (state, ownProps) => {
    const movieId = ownProps.match.params.movieId;
    const movie = state.entities.movies[movieId];
    const comments = Object.values(state.entities.comments);

    return {
        movieId,
        movie,
        comments,
        currentUserId: state.session.id,
    }
};

const mdtp = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchComments: () => dispatch(fetchComments()),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mstp, mdtp)(Movie);