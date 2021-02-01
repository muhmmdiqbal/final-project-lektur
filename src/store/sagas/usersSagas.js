import { call, put } from 'redux-saga/effects';
import { 
    createUserFailure,  
    userLoggedIn, 
    userLoggedInSuccess, 
    getCourseSuccess, 
    addCourseSuccess,
    getLessonsDetail,
    addLessonSuccess,
    getStudentSuccess,
    getCourseDetail,
 } from '../actions/users';
import api from '../api';
// import history from '../history';
// USER SIGN UP
export function* createUserSignUp({payload}) {
        const user = yield call(api.user.signUp, payload);
        if (user === 'Signup success!'){
            yield put(userLoggedIn(user));
        } else {
            console.log(user.response.data.errors.email.msg)
            yield put(createUserFailure(user.response.data.errors.email.msg));
        }
}

// TEACHER SIGN UP
export function* createTeacherSignUp({payload}) {
    try {
        const user = yield call(api.user.teacherSignUp, payload);
        yield put(userLoggedIn(user));
    } catch (err) {
        yield put(createUserFailure(err.message.status.response.data.errors.email.msg));
    }
}

// LOGIN
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

// COURSES
export function* getDataCourse() {
    const user = yield call(api.user.getCourse);
    yield put(getCourseSuccess(user));
}

export function* getCourseData({payload}) {
    const user = yield call(api.user.getCourseDataDetail, payload);
    yield put(getCourseDetail(user));
}

// COURSES LESSONS
export function* getLessons({payload}) {
    const user = yield call(api.user.getLesson, payload);
    yield put(getLessonsDetail(user));
}

// ADD DATA
export function* addDataCourse({payload}) {
        const user = yield call(api.user.addCourse, payload);
        yield put(addCourseSuccess(user));
}

export function* addDataLesson({payload}) {
        const user = yield call(api.user.addLesson, payload);
        yield put(addLessonSuccess(user));
    
}