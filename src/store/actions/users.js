import ACTION from '../types';
  

  export const userLoggedIn = user => ({
    type: ACTION.SIGN_UP_SUCCESS,
    user
  });

  export const signUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST,
    payload: payload
  });

  export const signUpSuccess = payload => ({
    type: ACTION.SIGN_UP_SUCCESS,
    payload: payload
  });
  
  export const createUserFailure = errors => ({
    type: ACTION.SIGN_UP_FAILURE,
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

  export const dataUserLoggedIn = () => ({
    type: ACTION.GET_USER,
    // payload: payload
  });

  export const userLoggedInSuccess = payload => ({
    type: ACTION.GET_USER_SUCCESS,
    payload: payload
  });
  export const getCourseSuccess = payload => ({
    type: ACTION.GET_COURSE_SUCCESS,
    payload: payload
  });

  export const dataCourse = () => ({
    type: ACTION.GET_COURSE,
    // payload: payload
  })

  export const getCourseFailure = errors => ({
    type: ACTION.GET_COURSE,
    errors
  });

  // export const getDataCourse = (payload) => ({
  //   type: ACTION.GET_DATA_COURSE,
  //   payload: payload
  // })
  // export const fetchCurrentUserRequest = () => ({
  //   type: FETCH_CURRENT_USER_REQUEST
  // });
  
  // export const fetchCurrentUserSuccess = user => ({
  //   type: FETCH_CURRENT_USER_SUCCESS,
  //   user
  // });
  