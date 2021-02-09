import ACTION from '../types';

export default function getLessonByEnrolledSuccess (state = [], action = []) {
    console.log(action, 'lihat data')
    switch (action.type) {
        case ACTION.GET_LESSON_BY_ENROLLED_COURSE_SUCCESS:
        let arr = []
        action.payload.map((val, i) => {
            arr [val._id] = val
        })
        console.log(arr, 'ini ARR')
            return  { ...arr };
        default:
            return state;
    }
}
