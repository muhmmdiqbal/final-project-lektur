import { combineReducers } from 'redux';
import user from './reducers/user';
import formErrors from './reducers/formErrors';
import course from './reducers/course';


export default combineReducers({
    user,
    formErrors,
    course
});


