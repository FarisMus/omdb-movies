import reducer, { set, merge, setKeyword } from './reducers';

describe('reducers', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			list: [],
			keyword: ''
		});
	});

	test('should set list to new value', () => {
		const previousState = {
			list: ['movie 1', 'movie 2'],
			keyword: ''
		};
		expect(reducer(previousState, set(['movie 3', 'movie 4'])))
			.toEqual({...previousState, list: ['movie 3', 'movie 4']});
	});

	test('should merge new list with old list', () => {
		const previousState = {
			list: ['movie 1', 'movie 2'],
			keyword: ''
		};
		expect(reducer(previousState, merge(['movie 3', 'movie 4'])))
			.toEqual({...previousState, list: ['movie 1', 'movie 2', 'movie 3', 'movie 4']});
	});

	test('should set movie keyword', () => {
		const previousState = {
			list: ['movie 1', 'movie 2'],
			keyword: ''
		};
		expect(reducer(previousState, setKeyword('batman')))
			.toEqual({...previousState, keyword: 'batman'});
	});
});
