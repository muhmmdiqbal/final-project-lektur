import { takeLatest } from 'redux-saga/effects';
// import { CREATE_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS } from "./types";
import ACTION from  './types';
import { createUserLogIn, createUserSignUp, fetchUserSaga } from "./sagas/usersSagas";

export default function* rootSaga() {
    yield takeLatest(ACTION.SIGN_UP_REQUEST, createUserSignUp);
    yield takeLatest(ACTION.USER_LOG_IN, createUserLogIn);
}