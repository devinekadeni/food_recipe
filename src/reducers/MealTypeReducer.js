import { FETCH_MEAL_TYPE, FETCH_MEAL_TYPE_FAILED, FETCH_MEAL_TYPE_DETAIL } from '../actions/types';
// import APITopRecipe from '../api/SampleAPITopRecipe.json';

const INITIAL_STATE = {
  payload: {},
  // payload: APITopRecipe,  
  errorMessage: '',
  fetching: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEAL_TYPE:
      return { ...state, payload: action.payload };
    case FETCH_MEAL_TYPE_FAILED:
      return { ...state, errorMessage: action.payload };
    case FETCH_MEAL_TYPE_DETAIL:
      return { ...state, payload: { 
        ...state.payload, data: { 
          ...state.payload.data, results: { 
            ...state.payload.data.results, [action.payload.id]: {
              ...state.payload.data.results[action.payload.id], ingredients: action.payload.ingredients
            }
          }  
        }
      }}
    default:
      return state;
  }
}

export default reducer;