import ACTION from '../types';

// GET LESSONS COURSE
export default function enrollcourse (state = { loaded: false, enroll:[] }, action) {
    switch (action.type) {
        case ACTION.ENROLLMENT_SUCCESS:
            return { ...state, enroll: action.user, loaded: true };
        default:
            return state;
    }
}

