import ACTION from '../types';
  
  export const signUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST,
    payload: payload
  });
  
  // export const createUserFailure = errors => ({
  //   type: CREATE_USER_FAILURE,
  //   errors
  // });
  
  // export const fetchCurrentUserRequest = () => ({
  //   type: FETCH_CURRENT_USER_REQUEST
  // });
  
  // export const fetchCurrentUserSuccess = user => ({
  //   type: FETCH_CURRENT_USER_SUCCESS,
  //   user
  // });
  