import ACTION from '../types';

export default function student (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_STUDENT_SUCCESS:
             return [...action.payload] ;
        default:
            return state;
    }
}