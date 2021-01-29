// import { CREATE_USER_FAILURE, CREATE_USER_REQUEST } from "../types";
import ACTION from '../types';

export default function formErrors(state = {}, action = {}) {
  switch (action.type) {
    case ACTION.SIGN_UP_REQUEST:
      return { ...state, signUp: {} };
    case ACTION.USER_LOG_IN:
      return { ...state, logIn: {} };
    case ACTION.SIGN_UP_FAILURE:
      return { ...state, signUp: action.errors };
    case ACTION.GET_USER:
      return { ...state, getUser: {} };
    case ACTION.GET_COURSE:
      return { ...state, getCourse: {} };
    
    // case ACTION.GET_DATA_HOME:
    //   return { ...state, homeData: {}};
    default:
      return state;
  }
}
