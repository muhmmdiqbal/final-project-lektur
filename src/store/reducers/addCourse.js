import ACTION from '../types';

export default function addCourse (state = { loaded: false }, action = {}) {
    switch (action.type) {
        case ACTION.ADD_COURSE_SUCCESS:
             return { ...action.addCourse, loaded: true };
       
        default:
            return state;
    }
}