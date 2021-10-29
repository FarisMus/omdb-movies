import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=b693434f';

export const getMovieByTitle = (title, page = 1) => {
	return axios.get(baseURL + `&s=${title}&page=${page}`).then(response => response.data);
};
export const getMovieById = (id) => {
	return axios.get(baseURL + `&i=${id}`).then(response => response.data);
};
