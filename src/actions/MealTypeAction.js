import axios from 'axios';
import _ from 'lodash';
import { FETCH_MEAL_TYPE, FETCH_MEAL_TYPE_FAILED, FETCH_MEAL_TYPE_DETAIL } from './types';
import { APIKey, baseURL, headers } from '../api/ApiConfig';

export const fetchTopRecipes = (type = '') => {
  const encodedType = encodeURI(type);
  return (dispatch) => {
    console.log('hit api top recipe');
    axios.get(`${baseURL}search?instructionsRequired&number=11&offset=0&query=<required>&type=${encodedType}`, {headers})
      .then(response => {
        const newResponse = { ...response, 
          data: { 
            ...response.data, 
            results: _.mapKeys(response.data.results, 'id')
          }
        }
        dispatch({ type: FETCH_MEAL_TYPE, payload: newResponse });
      })
      .catch(err => {
        // console.log(err);
        dispatch({ type: FETCH_MEAL_TYPE_FAILED, payload: err});
      })
  }
}

export const fetchIngredientsTopRecipes = (id) => {
  return (dispatch) => {
    axios.get(`${baseURL}${id}/information?includeNutrition=false`, {headers})
      .then(response => {
        // console.log(response.data);
        dispatch({ type: FETCH_MEAL_TYPE_DETAIL, payload: {
          id: response.data.id,
          ingredients: response.data.extendedIngredients
        }});
      })
      .catch(err => {
        dispatch({ type: FETCH_MEAL_TYPE_FAILED, payload: err })
      })
  }
}

