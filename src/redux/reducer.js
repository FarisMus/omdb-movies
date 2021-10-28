import { createSlice } from '@reduxjs/toolkit'

export const searchResult = createSlice({
	name: 'searchResult',
	initialState: {
		list: [],
		keyword: ''
	},
	reducers: {
		reset: (state) => {
			state.list = []
		},
		set: (state, action) => {
			state.list = action.payload
		},
		merge: (state, action) => {
			state.list = [...state.list, ...action.payload]
		},
		setKeyword: (state, action) => {
			state.keyword = action.payload
		}
	},
});

export const { reset, merge, set, setKeyword } = searchResult.actions;

export default searchResult.reducer
