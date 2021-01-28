import { combineReducers } from 'redux';
import user from './reducers/user';
import formErrors from './reducers/formErrors';
import course from './reducers/course';
import addCourse from './reducers/addCourse';
import student from './reducers/course';
import addLesson from './reducers/addLesson';


export default combineReducers({
    user,
    formErrors,
    course,
    addCourse,
    addLesson,
    student
});


