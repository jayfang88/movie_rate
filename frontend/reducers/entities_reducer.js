import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
// import mediasReducer
// import commentsReducer

const entitiesReducer = combineReducers({
    users: usersReducer,
});


export default entitiesReducer;