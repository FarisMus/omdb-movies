import * as axios from 'axios';
import { getMovieById, getMovieByTitle } from './services';

jest.mock('axios');

describe('getMovieByTitle', () => {
	it('should return with correct data when promise resolved', async () => {
		const mockData = ['movie 1', 'movie 2'];
		axios.get.mockImplementation(() => Promise.resolve({data: mockData}));

		const result = await getMovieByTitle('batman', 1);

		expect(result).toEqual(mockData);
	});
});

describe('getMovieById', () => {
	it('should return with correct data when promise resolved', async () => {
		const mockData = { Title: 'Batman', year: '2002'};
		axios.get.mockImplementation(() => Promise.resolve({data: mockData}));

		const result = await getMovieById('1234');

		expect(result).toEqual(mockData);
	});
});
