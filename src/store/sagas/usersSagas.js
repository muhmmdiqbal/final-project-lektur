import { call, put } from 'redux-saga/effects';
import { 
    createUserFailure,  
    userLoggedIn, 
    userLoggedInSuccess, 
    getCourseSuccess, 
    addCourseSuccess,
    getTeacherCoursesSuccess,
    getLessonsDetail,
    addLessonSuccess,
    getStudentSuccess,
    getCourseDetail,
    getEnrollCourseSuccess,
    getEnrollCourseFailed,
    checkEnrollmentSuccess,
    getEnrolledCourseResult,
    getCourseCategorySuccess,
    getLessonByEnrolledSuccess,
    getTitleBySearchSuccess
 } from '../actions/users';
import api from '../api';
// import history from '../history';
// USER SIGN UP
export function* createUserSignUp({payload}) {
        const user = yield call(api.user.signUp, payload);
        if (user === 'Signup success!'){
            yield put(userLoggedIn(user));
        } else {
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
        localStorage.setItem('role' ,user.role)
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

// GET TEACHER COURSES
export function* getTeacherCourse(){
    const user = yield call(api.user.getTeacherCourses);
    yield put(getTeacherCoursesSuccess(user));
}

// COURSES LESSONS
export function* getLessons({payload}) {
    const user = yield call(api.user.getLesson, payload);
    yield put(getLessonsDetail(user));
}

// COURSES CATEGORY
export function* getDataCourseCategory({payload}) {
    const user = yield call(api.user.getCourseCategory, payload);
    yield put(getCourseCategorySuccess(user));
}

// TITLE BY SEARCH
export function* getDataTitleBySearch({payload}) {
    const user = yield call(api.user.getTitleBySearch, payload);
    yield put(getTitleBySearchSuccess(user));
}

// ENROLL COURSE
export function* getEnrollCourse({payload}) {
    const user = yield call(api.user.enrollCourses, payload);
    if (user === 'Success enroll to course!') {
        yield put(getEnrollCourseSuccess(user));
    } else {
        yield put (getEnrollCourseFailed(user.errors.course_id.msg))
    }
}

// CHECK ENROLL
export function* checkEnrollCourse() {
    const user = yield call(api.user.checkingEnrollment);
    console.log(user, 'udah disini')
    yield put(checkEnrollmentSuccess(user))
}

// GET ENROLLED COURSE
export function* getEnrolledCourse() {
    const user = yield call(api.user.getEnrolledCourses);
    yield put (getEnrolledCourseResult(user));
}

//GET LESSON BY ENROLLED
export function* getLessonByEnrolled({payload}) {
    const user = yield call(api.user.getEnrollmentCourse, payload);
    yield put(getLessonByEnrolledSuccess(user));
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