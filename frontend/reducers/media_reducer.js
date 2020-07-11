import { RECEIVE_MEDIA, RECEIVE_MEDIUM, REMOVE_MEDIUM} from '../actions/medium_actions';

const mediaReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_MEDIA:
            return action.media
        case RECEIVE_MEDIUM:
            newState[action.medium.id] = action.medium;
            return newState;
        case REMOVE_MEDIUM:
            delete newState[action.mediumId];
            return newState;
        default:
            return state;
    }
};

export default mediaReducer;