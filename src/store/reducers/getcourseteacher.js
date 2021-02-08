import ACTION from '../types';

export default function getTeacherCoursesSuccess (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_TEACHER_COURSE_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
}