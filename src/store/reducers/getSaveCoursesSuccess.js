import ACTION from '../types';

export default function getSaveCoursesSuccess (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_SAVED_COURSE_SUCCESS:
            return [ ...action.payload ];
        default:
            return state;
    }
}
