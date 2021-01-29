import ACTION from '../types';
  

  export const userLoggedIn = user => ({
    type: ACTION.SIGN_UP_SUCCESS,
    user
  });

  export const signUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST,
    payload: payload
  });

  export const dataAddCourse = payload => ({
    type: ACTION.ADD_COURSE,
    payload: payload
  })
  export const addCourseSuccess = payload => ({
    type: ACTION.ADD_COURSE_SUCCESS,
    payload: payload
  });

  export const dataAddLesson = payload => ({
    type: ACTION.ADD_LESSON,
    payload: payload
  })
  export const addLessonSuccess = payload => ({
    type: ACTION.ADD_LESSON_SUCCESS,
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
  
  // COURSES
  export const getCourseSuccess = payload => ({
    type: ACTION.GET_COURSE_SUCCESS,
    payload: payload
  });
  
  export const dataCourse = () => ({
    type: ACTION.GET_COURSE,
    // payload: payload
  });

  export const getStudentSuccess = payload => ({
    type: ACTION.GET_STUDENT_SUCCESS,
    payload: payload
  });
  
  export const dataStudent = () => ({
    type: ACTION.GET_STUDENT,
    // payload: payload
  });

  export const getCourseFailure = errors => ({
    type: ACTION.GET_COURSE,
    errors
  });

  export const getDataCourse = payload => ({
    type: ACTION.GET_COURSE_DETAIL,
    payload: payload
  })