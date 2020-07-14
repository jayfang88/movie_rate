import { RECEIVE_MOVIE, RECEIVE_MOVIE_ERRORS } from '../actions/movie_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const movieErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MOVIE:
            return [];
        case RECEIVE_MOVIE_ERRORS:
            return action.errors;
        case OPEN_MODAL:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default movieErrorsReducer;