import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import mediaReducer from './media_reducer';
// import commentsReducer

const entitiesReducer = combineReducers({
    users: usersReducer,
    media: mediaReducer,
});


export default entitiesReducer;