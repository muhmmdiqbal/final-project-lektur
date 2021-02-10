import ACTION from '../types';
  
  // SIGN UP
  export const userLoggedIn = user => ({
    type: ACTION.SIGN_UP_SUCCESS,
    user
  });

  export const signUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST,
    payload: payload
  });

  //SIGN UP TEACHER
  export const teacherSignUpRequest = payload => ({
    type: ACTION.SIGN_UP_REQUEST_TEACHER,
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

  export const dataUserLoggedIn = () => ({
    type: ACTION.GET_USER,
  });

  export const userLoggedInSuccess = payload => ({
    type: ACTION.GET_USER_SUCCESS,
    payload: payload
  });
  
  // GET TEACHER COURSES
  export const teacherCourseData = () => ({
    type: ACTION.GET_TEACHER_COURSE
  });

  export const getTeacherCoursesSuccess = payload => ({
    type: ACTION.GET_TEACHER_COURSE_SUCCESS,
    payload: payload
  });

  // COURSES
  export const getCourseSuccess = payload => ({
    type: ACTION.GET_COURSE_SUCCESS,
    payload: payload
  });
  
  export const dataCourse = () => ({
    type: ACTION.GET_COURSE,
  });

  //COURSES DETAIL
  export const getDataCourse = payload => ({
    type: ACTION.GET_COURSE_DETAIL,
    payload: payload
  })

  export const getCourseDetail = payload => ({
    type: ACTION.GET_COURSE_DETAIL_SUCCESS,
    payload: payload
  })

  // COURSES LESSONS
  export const getCoursesLessons = payload => ({
    type: ACTION.GET_LESSONS,
    payload: payload
  })
  export const getLessonsDetail = payload => ({
    type: ACTION.GET_LESSONS_SUCCESS,
    payload: payload
  })
  
  // COURSES CATEGORY
  export const getCourseCategorySuccess = payload => ({
    type: ACTION.GET_COURSE_CATEGORY_SUCCESS,
    payload: payload
  });

  //ENROLL COURSE
  export const getEnrollStatus = payload => ({
    type: ACTION.ENROLL_COURSE,
    payload: payload
  });

  //CHECK ENROLLMENT STATUS
  export const checkEnrollStatus = () => ({
    type: ACTION.ENROLL_CHECK
  });

  export const checkEnrollmentSuccess = payload => ({
    type: ACTION.ENROLL_CHECKED,
    payload: payload
  });

  // ENROLL COURSE
  export const getEnrollCourseFailed = payload => ({
    type: ACTION.ENROLLMENT_FAILED,
    payload: payload
  });
  
  export const getEnrollCourseSuccess = payload => ({
    type: ACTION.ENROLLMENT_SUCCESS,
    payload: payload
  });

  // ENROLLED COURSE BY STUDENT
  export const enrolledCourse = () => ({
    type: ACTION.GET_ENROLLED_COURSE
  })

  export const getEnrolledCourseResult = payload => ({
    type: ACTION.GET_ENROLLED_COURSE_SUCCESS,
    payload: payload
  });

  //COURSE CATEGORY
  export const dataCourseCategory = payload => ({
    type: ACTION.GET_COURSE_CATEGORY,
    payload: payload
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

  // TITLE BY SEARCH
  export const getTitleBySearchSuccess = payload => ({
    type: ACTION.GET_TITLE_BY_SEARCH_SUCCESS,
    payload: payload
  });

  export const getTitleBySearch = payload => ({
    type: ACTION.GET_TITLE_BY_SEARCH,
    payload: payload
  });

  // LESSON BY ENRROLLED COURSE
  export const getCourseLessons = payload => ({
    type: ACTION.GET_LESSON_BY_ENROLLED_COURSE,
    payload: payload
  })

  export const getLessonByEnrolledSuccess = payload => ({
    type: ACTION.GET_LESSON_BY_ENROLLED_COURSE_SUCCESS,
    payload: payload
  })

  // SAVED COURSE
  export const getSavedCourse = () => ({
    type: ACTION.GET_SAVED_COURSE
  })
  
  export const getSaveCoursesSuccess = payload => ({
    type: ACTION.GET_SAVED_COURSE_SUCCESS,
    payload: payload
  })
  

  