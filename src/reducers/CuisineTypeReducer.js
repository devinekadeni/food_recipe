import { FETCH_CUISINE_TYPE, FETCH_CUISINE_TYPE_FAILED } from '../actions/types';

const INITIAL_STATE = {
  payload: {},
  fetching: false,
  errorMessage: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CUISINE_TYPE:
      return { ...state, payload: action.payload, errorMessage: '', fetching: false };
    case FETCH_CUISINE_TYPE_FAILED:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;