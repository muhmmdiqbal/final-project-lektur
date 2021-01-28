import { call, put } from 'redux-saga/effects';
import { 
    createUserFailure, 
    dataUserLoggedIn, 
    userLoggedIn, 
    userLoggedInSuccess, 
    getCourseSuccess, 
    addCourseSuccess,
    addLessonSuccess,
    getStudentSuccess
 } from '../actions/users';
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

export function* addDataCourse({payload}) {
    // console.log(payload, 'ini data')
    
        const user = yield call(api.user.addCourse, payload);
        yield put(addCourseSuccess(user));
        // history.push('/');
    
}

export function* addDataLesson({payload}) {
    // console.log(payload, 'ini data')
    
        const user = yield call(api.user.addLesson, payload);
        yield put(addLessonSuccess(user));
        // history.push('/');
    
}

export function* getDataCourse() {
   
        const user = yield call(api.user.getCourse);
        yield put(getCourseSuccess(user));
     }
    // const user = yield call(api.user.getCourse)

    // yield put(userLoggedIn(user))}
export function* getDataStudent() {
   
        const user = yield call(api.user.getStudent);
        yield put(getStudentSuccess(user));
     }

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