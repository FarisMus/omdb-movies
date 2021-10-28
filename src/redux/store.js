import { configureStore } from '@reduxjs/toolkit';
import searchResult from './reducer'

export default configureStore({
	reducer: searchResult,
})
