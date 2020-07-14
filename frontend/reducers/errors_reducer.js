import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import movie from './movie_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    movie
});

export default errorsReducer;