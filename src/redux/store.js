import { configureStore } from '@reduxjs/toolkit';
import searchResult from './Reducer/reducers'

export default configureStore({
  reducer: searchResult,
})
