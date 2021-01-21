import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    FETCH_CURRENT_USER_SUCCESS,
    CREATE_USER_REQUEST,
    CREATE_USER_FAILURE

} from '../types';

export default function user(state = { loaded: false }, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { ...action.user, loaded: true };
        case FETCH_CURRENT_USER_SUCCESS:
            return { ...state, ...action.user, loaded: true};
        case USER_LOGGED_OUT:
            return { loaded: true };

        case CREATE_USER_REQUEST:
            return { ...state, ...action.user, loaded: true};

        case CREATE_USER_FAILURE:
            return { ...state, ...action.user, loaded: true};

        case FETCH_CURRENT_USER_SUCCESS:
            return { ...state, ...action.user, loaded: true};
        default:
            return state;
    }
}