import ACTION from '../types';

// ENROLL CHECK
export default function enrollStatus (state = { loaded: false, enroll:[] }, action) {
    switch (action.type) {
        case ACTION.ENROLL_CHECKED:
            return { ...state, enroll: action.payload, loaded: true };
        default:
            return state;
    }
}