import ACTION from '../types';

export default function user (state = { loaded: false, status:'' , errorMessages:'' }, action = {}) {
    switch (action.type) {
        case ACTION.SIGN_UP_SUCCESS:
            return { status:action.user, loaded: true };
        case ACTION.USER_LOG_IN:
            return { ...action.user, loaded: true };
        case ACTION.GET_USER_SUCCESS: 
            return { ...action.payload, loaded: true };
        case ACTION.SIGN_UP_FAILURE:
            return { ...state, loaded: true, errorMessages: action.errors };
        default:
            return state;
    }
}