import ACTION from '../types';

export default function searchtitle (state = [], action = {}) {
    switch (action.type) {
        case ACTION.GET_TITLE_BY_SEARCH_SUCCESS:
             return [...action.payload] ;
        default:
            return state;
    }
}