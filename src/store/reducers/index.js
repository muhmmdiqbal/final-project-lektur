import { combineReducers } from 'redux';
import course from './course-reducer';
import courseByCategory from './courseCategory-reducer';

export default combineReducers({
    course,
    courseByCategory
})