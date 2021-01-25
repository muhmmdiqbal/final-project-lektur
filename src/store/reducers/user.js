import ACTION from '../types';

export default function user (state = { loaded: false }, action = {}) {
    switch (action.type) {
        case ACTION.SIGN_UP_SUCCESS:
            return { ...action.user, loaded: true };
        case ACTION.USER_LOG_IN:
            return { ...action.user, loaded: true };
        case ACTION.GET_USER_SUCCESS: 
            return { ...action.payload, loaded: true };
        // case FETCH_CURRENT_USER_SUCCESS:
        //     return { ...state, ...action.user, loaded: true };
        // case USER_LOGGED_OUT:
        //     return { loaded: true };
        // case CREATE_USER_REQUEST:
        //     return { ...action.user, loaded: true };
        // case CREATE_USER_FAILURE:
        //     return { ...state, ...action.user, loaded: false };
        default:
            return state;
    }
}