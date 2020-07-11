import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
// import commentsReducer

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
});


export default entitiesReducer;