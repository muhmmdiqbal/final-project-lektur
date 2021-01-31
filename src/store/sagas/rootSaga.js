import { takeEvery, takeLatest } from 'redux-saga/effects';
// import { CREATE_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS } from "./types";
import ACTION from  '../actions/types';
import { 
    // createUserLogIn, 
    // createUserSignUp, 
    // getUserSaga, 
    getDataCourse
    // getDataStudent,
    // addDataCourse, 
    // addDataLesson 
} from "./index";

export default function* rootSaga() {
    // yield takeLatest(ACTION.SIGN_UP_REQUEST, createUserSignUp);
    // yield takeLatest(ACTION.USER_LOG_IN, createUserLogIn);
    // yield takeLatest(ACTION.GET_USER, getUserSaga);
    yield takeLatest(ACTION.GET_COURSE, getDataCourse);
    // yield takeLatest(ACTION.GET_STUDENT, getDataStudent);
    // yield takeLatest(ACTION.ADD_COURSE, addDataCourse);
    // yield takeLatest(ACTION.ADD_LESSON, addDataLesson);
}