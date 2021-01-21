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
    default:
      return state;
  }
}
