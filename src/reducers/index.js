import { combineReducers } from 'redux';
import MealTypeList from './MealTypeReducer';

const rootReducer = combineReducers({
  MealTypeList,
});

export default rootReducer;