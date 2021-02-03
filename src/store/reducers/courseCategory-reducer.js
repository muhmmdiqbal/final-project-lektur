import {
    SET_LOADING,
    GET_COURSES_BY_CATEGORY
} from '../actions/types';

const initialState = {
    loading: false,
    coursesByCategory: [],
    loaded: false
}

export default(state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_COURSES_BY_CATEGORY:
            return {
                ...state,
                coursesByCategory: payload,
                loading: false,
                loaded: true
            }
        default:
            return state
    }
}