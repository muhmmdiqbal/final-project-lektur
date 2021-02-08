import ACTION from '../types';

// GET LESSONS COURSE
export default function getEnrollCourseFailed (state = { loaded: false, errorMessages:'' }, action) {
    switch (action.type) {
        case ACTION.ENROLLMENT_FAILED:
            return {  ...state, errorMessages: action.payload, loaded: true };
        default:
            return state;
    }
}