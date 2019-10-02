import {combineReducers} from "redux";
import courses from './course/courseReducer';
import authors from './author/authorReducer';
import ajaxStatus from './ajaxStatus/ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxStatus
});

export default rootReducer;
