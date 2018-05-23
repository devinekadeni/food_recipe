import axios from 'axios';
import _ from 'lodash';
import { FETCH_CUISINE_TYPE, FETCH_CUISINE_TYPE_FAILED } from './types';
import { APIKey, baseURL, headers } from '../api/ApiConfig';

export const fetchPopularRecipes = (cuisine = '') => {
  const encodedCuisine = encodeURI(cuisine);
  return (dispatch) => {
    console.log('hit api popular recipe');
    axios.get(`${baseURL}search?cuisine=${encodedCuisine}&instructionsRequired&number=4&offset=0&query=<required>`, {headers})
      .then(response => {
        const newResponse = { ...response, 
          data: { 
            ...response.data, 
            results: _.mapKeys(response.data.results, 'id')
          }
        }
        // console.log('response popular action',newResponse);
        dispatch({ type: FETCH_CUISINE_TYPE, payload: newResponse });
      })
      .catch(err => {
        // console.log(err);
        dispatch({ type: FETCH_CUISINE_TYPE_FAILED, payload: err});
      })
  }
}