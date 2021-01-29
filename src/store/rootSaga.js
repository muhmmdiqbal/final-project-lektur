import { takeEvery, takeLatest } from 'redux-saga/effects';
import ACTION from  './types';
import { createUserLogIn, createUserSignUp, getUserSaga, getDataCourse, getCoursesDetail } from "./sagas/usersSagas";
import { 
    createUserLogIn, 
    createUserSignUp, 
    getUserSaga, 
    getDataCourse, 
    getDataStudent,
    addDataCourse, 
    addDataLesson 
} from "./sagas/usersSagas";

export default function* rootSaga() {
    yield takeLatest(ACTION.SIGN_UP_REQUEST, createUserSignUp);
    yield takeLatest(ACTION.USER_LOG_IN, createUserLogIn);
    yield takeLatest(ACTION.GET_USER, getUserSaga);
    // COURSES
    yield takeLatest(ACTION.GET_COURSE, getDataCourse);
    // COURSES DETAIL
    yield takeLatest(ACTION.GET_COURSES_DETAIL, getCoursesDetail);
    yield takeLatest(ACTION.GET_STUDENT, getDataStudent);
    // ADD DATA
    yield takeLatest(ACTION.ADD_COURSE, addDataCourse);
    yield takeLatest(ACTION.ADD_LESSON, addDataLesson);
}