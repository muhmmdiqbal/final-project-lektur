import ACTION from '../types';

export default function course (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_COURSE_SUCCESS:
             return [...action.payload] ;
        case ACTION.GET_DATA_COURSE:
            return [...action.payload] ;
        default:
            return state;
    }
}


