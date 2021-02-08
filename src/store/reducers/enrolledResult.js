import ACTION from '../types';

export default function getEnrolledCourseResult (state =[], action=[]) {
    switch (action.type) {
        case ACTION.GET_ENROLLED_COURSE_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
}