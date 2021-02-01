import ACTION from '../types';

// GET DETAIL COURSE
export default function courseDetail (state = { loaded: false }, action = {}) {
    switch (action.type) {
        case ACTION.GET_COURSE_DETAIL_SUCCESS:
            return { ...state, ...action.payload, loaded: true };
        default:
            return state;
    }
}