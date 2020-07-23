import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies, updateMovie } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieForm from './movie_form';

class MovieUpdate extends React.Component {
    render() {
        const { movie, errors, movieAction, fetchMovies, closeModal, formTitle,
                formButton } = this.props;
        return(
            <MovieForm movie={movie} errors={errors} movieAction={movieAction}
                fetchMovies={fetchMovies} closeModal={closeModal} 
                formTitle={formTitle} formButton={formButton}/>
        )
    }
};

const mstp = (state, ownProps) => {
    let movieId = ownProps.location.pathname.split('/')[2];
    return {
        movie: state.entities.movies[movieId],
        errors: state.errors.movie,
        formTitle: 'Edit Movie',
        formButton: 'Make Changes'
    }
};

const mdtp = dispatch => ({
    movieAction: movie => dispatch(updateMovie(movie)),
    fetchMovies: () => dispatch(fetchMovies()),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mstp, mdtp)(MovieUpdate));