import { takeEvery, takeLatest } from 'redux-saga/effects';
import ACTION from  './types';
import { 
    createUserLogIn, 
    createUserSignUp,
    createTeacherSignUp, 
    getUserSaga, 
    getDataCourse,
    getTeacherCourse,
    getCourseData,
    getLessons,
    getDataStudent,
    addDataCourse, 
    addDataLesson,
    getEnrollCourse,
    checkEnrollCourse,
    getEnrolledCourse,
    getDataCourseCategory
} from "./sagas/usersSagas";

export default function* rootSaga() {
    // SIGN UP STUDENT
    yield takeLatest(ACTION.SIGN_UP_REQUEST, createUserSignUp);
    // SIGN UP TEACHER
    yield takeLatest(ACTION.SIGN_UP_REQUEST_TEACHER, createTeacherSignUp);
    // LOGIN
    yield takeLatest(ACTION.USER_LOG_IN, createUserLogIn);
    yield takeLatest(ACTION.GET_USER, getUserSaga);
    // GET TEACHER COURSE
    yield takeLatest(ACTION.GET_TEACHER_COURSE, getTeacherCourse)
    // COURSES
    yield takeLatest(ACTION.GET_COURSE, getDataCourse);
    // COURSES CATEGORY
    yield takeLatest(ACTION.GET_COURSE_CATEGORY, getDataCourseCategory);
    // COURSES DETAIL
    yield takeEvery(ACTION.GET_COURSE_DETAIL, getCourseData);
    // GET LESSONS
    yield takeLatest(ACTION.GET_LESSONS, getLessons);
    // ENROLL COURSE
    yield takeLatest(ACTION.ENROLL_COURSE, getEnrollCourse);
    // GET ENROLLED COURSE
    yield takeLatest(ACTION.GET_ENROLLED_COURSE, getEnrolledCourse);
    // ENROLL CHECK
    yield takeLatest(ACTION.ENROLL_CHECK, checkEnrollCourse);
    // ADD DATA
    yield takeLatest(ACTION.ADD_COURSE, addDataCourse);
    yield takeLatest(ACTION.GET_STUDENT, getDataStudent);
    yield takeLatest(ACTION.ADD_LESSON, addDataLesson);
}