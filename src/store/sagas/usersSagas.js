import { call, put } from 'redux-saga/effects';
import { createUserFailure, dataUserLoggedIn, userLoggedIn, userLoggedInSuccess, getCourseSuccess } from '../actions/users';
import api from '../api';
// import history from '../history';

export function* createUserSignUp({payload}) {
    // console.log(payload, 'ini data')
    try {
        const user = yield call(api.user.signUp, payload);
        localStorage.bookwormJWT = user.token;
        yield put(userLoggedIn(user));
        // history.push('/');
    } catch (err) {
        yield put(createUserFailure(err.message));
    }
}

export function* getDataCourse() {
    const user = yield call(api.user.getCourse);
    yield put(getCourseSuccess(user));
}

// export function* getDataCourseSuccess({payload}) {
//     const user = yield call(api.user.getCourse, payload);
//     yield put(getDataCourse(user));
// }

export function* createUserLogIn({payload}) {

    try {
        const user = yield call(api.user.logIn, payload);
        yield put(userLoggedIn(user));
    } catch (err) {
        yield put(createUserFailure(err.message));
    }
}

export function* getUserSaga () {
    try {
        const user = yield call(api.user.getData);
        yield put(userLoggedInSuccess(user));
    } catch (err) {
        yield put(createUserFailure(err.message));
    }
}