import ACTION from '../types';

export default function getLessonByEnrolledSuccess (state = [], action = []) {
    switch (action.type) {
        case ACTION.GET_LESSON_BY_ENROLLED_COURSE_SUCCESS:
        let arr = []
        action.payload.map((val, i) => {
            arr [val._id] = val
        })
            return  { ...arr };
        default:
            return state;
    }
}
