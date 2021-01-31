import ACTION from '../actions/types';

export default function course (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_COURSE_SUCCESS:
             return [...action.payload] ;
        default:
            return state;
    }
}