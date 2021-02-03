import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import {
    SET_LOADING,
    GET_COURSES,
    GET_COURSES_SUCCESS,
    GET_COURSES_BY_CATEGORY,
    GET_COURSES_BY_CATEGORY_SUCCESS
} from '../actions/types';

import {
    getAllCourses,
    getCoursesCategory
} from '../api/all-api';

function* getCourses() {
    yield put({ type: SET_LOADING })

    const courses = yield call(getAllCourses)

    yield put({ type: GET_COURSES, payload: courses })
}

function* getCoursesByCategory() {
    yield put({ type: SET_LOADING })

    const coursesByCategory = yield call(getCoursesCategory)

    yield put({ type: GET_COURSES_BY_CATEGORY, payload: coursesByCategory })
}

export default function* allSaga() {
    yield takeLatest(GET_COURSES_SUCCESS, getCourses)
    yield takeLatest(GET_COURSES_BY_CATEGORY_SUCCESS, getCoursesByCategory)
}