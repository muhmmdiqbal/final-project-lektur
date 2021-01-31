import { combineReducers } from 'redux';
import user from './reducers/user';
import formErrors from './reducers/formErrors';
import course from './reducers/course';
import addCourse from './reducers/addCourse';
import student from './reducers/course';
import addLesson from './reducers/addLesson';
import detailcourse from './reducers/detailcourse';

export default combineReducers({
    user,
    formErrors,
    course,
    detailcourse,
    addCourse,
    addLesson,
    student
});


