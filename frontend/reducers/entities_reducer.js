import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import comments from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    comments,
});


export default entitiesReducer;