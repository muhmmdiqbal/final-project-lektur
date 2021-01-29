import ACTION from '../types';

export default function course (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_COURSE_SUCCESS:
             return [...action.payload] ;
        case ACTION.GET_COURSES_DETAIL:
            return { ...state, ...action.user, loaded: true };
        default:
            return state;
    }
}