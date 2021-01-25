import ACTION from '../types';
  
  export const signUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST,
    payload: payload
  });

  export const signUpSuccess = payload => ({
    type: ACTION.SIGN_UP_SUCCESS,
    payload: payload
  });
  
  export const createUserFailure = errors => ({
    type: ACTION.CREATE_USER_FAILURE,
    errors
  });
  
  export const createUserLogIn = payload => ({
    type: ACTION.USER_LOG_IN,
    payload: payload
  });

  export const createUserLogOut = payload => ({
    type: ACTION.USER_LOG_OUT,
    payload: payload
  });

  export const getCourse = payload => ({
    type: ACTION.GET_COURSE,
    payload: payload
  })

  export const getCourseFailure = errors => ({
    type: ACTION.GET_COURSE,
    errors
  });
  // export const fetchCurrentUserRequest = () => ({
  //   type: FETCH_CURRENT_USER_REQUEST
  // });
  
  // export const fetchCurrentUserSuccess = user => ({
  //   type: FETCH_CURRENT_USER_SUCCESS,
  //   user
  // });
  