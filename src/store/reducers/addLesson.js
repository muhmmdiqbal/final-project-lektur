import ACTION from '../types';

export default function addLesson (state = { loaded: false }, action = {}) {
    switch (action.type) {
        case ACTION.ADD_LESSON_SUCCESS:
             return { ...action.addLesson, loaded: true };
        default:
            return state;
    }
}