const APIKey = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;
const imageBaseURL = process.env.REACT_APP_IMAGE_BASE_URL; 
const headers = {
  'X-Mashape-Key': APIKey,
  Accept: 'application/json',
};

export {
  APIKey,
  baseURL,
  imageBaseURL,
  headers
}