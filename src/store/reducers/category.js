import ACTION from '../types';

export default function category (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_COURSE_CATEGORY_SUCCESS:
             return [...action.payload] ;
        default:
            return state;
    }
}


