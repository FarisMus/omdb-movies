import axios from 'axios';

import Constants from '../Constants/Constants'

const baseURL = `http://www.omdbapi.com/?apikey=${Constants.PERSONAL_API_KEY}`;

export const getMovieByTitle = (title, page = 1) => {
  const config = { params: { s: title, page } };

  return axios.get(baseURL, config).then(response => response.data);
};

export const getMovieById = (id) => {
  const config = { params: { i: id } };

  return axios.get(baseURL, config).then(response => response.data);
};
