import { RECEIVE_MOVIE, RECEIVE_MOVIE_ERRORS } from '../actions/movie_actions';

const movieErrorsReducer = (state=[], action) => {
    switch(action.type) {
        case RECEIVE_MOVIE:
            return []
        case RECEIVE_MOVIE_ERRORS:
            return action.errors
        default:
            return state
    }
};

export default movieErrorsReducer;