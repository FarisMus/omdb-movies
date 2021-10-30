import { createSlice } from '@reduxjs/toolkit'

export const searchResult = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    keyword: ''
  },
  reducers: {
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

export const { merge, set, setKeyword } = searchResult.actions;

export default searchResult.reducer
