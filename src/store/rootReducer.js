import { combineReducers } from 'redux';
import user from './reducers/user';
import formErrors from './reducers/formErrors';
import course from './reducers/course';
import category from './reducers/category';
import addCourse from './reducers/addCourse';
import student from './reducers/course';
import addLesson from './reducers/addLesson';
import detailcourse from './reducers/detailcourse';
import lessonscourse from './reducers/lessonscourse';
import enrollcourse from './reducers/enrollcourse';
import getcourseteacher from './reducers/getcourseteacher';
import enrolledResult from './reducers/enrolledResult';
import enrollStatus from './reducers/enrollStatus';
import enrollError from "./reducers/enrollError";
import searchtitle from "./reducers/searchtitle";

export default combineReducers({
    user,
    formErrors,
    course,
    getcourseteacher,
    detailcourse,
    lessonscourse,
    enrollcourse,
    addCourse,
    enrolledResult,
    enrollStatus,
    enrollError,
    addLesson,
    student,
    category,
    searchtitle
});


