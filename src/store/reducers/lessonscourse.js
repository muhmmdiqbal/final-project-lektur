import ACTION from '../types';

// GET LESSONS COURSE
export default function lessoncourse (state = { loaded: false, lesson: [] }, action) {
    switch (action.type) {
        case ACTION.GET_LESSONS_SUCCESS:
            return { ...state, lesson: action.payload, loaded: true };
        default:
            return state;
}
}