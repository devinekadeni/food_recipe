import { combineReducers } from 'redux';
import MealTypeList from './MealTypeReducer';
import CuisineTypeList from './CuisineTypeReducer';

const rootReducer = combineReducers({
  MealTypeList,
  CuisineTypeList
});

export default rootReducer;