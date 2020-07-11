import { RECEIVE_MOVIES, RECEIVE_MOVIE, REMOVE_MOVIE} from '../actions/movie_actions';

const moviesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_MOVIES:
            return action.movies
        case RECEIVE_MOVIE:
            newState[action.movie.id] = action.movie;
            return newState;
        case REMOVE_MOVIE:
            delete newState[action.movieId];
            return newState;
        default:
            return state;
    }
};

export default moviesReducer;