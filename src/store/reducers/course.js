import ACTION from '../types';

export default function course (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_COURSE_SUCCESS:
             return [...action.payload] ;
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