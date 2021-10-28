import React from 'react';
import { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useDispatch } from 'react-redux'

import { set, setKeyword } from '../../redux/reducer';
import { getMovieByTitle } from '../../Services';

const _mapResultToOptions = (result) => {
	return result.map(res => ({ value: res.Title }));
};

const OnSearch = async (input, setResult, setKeyword) => {
	setKeyword(input);
	const result = await getMovieByTitle(input);
	if(result.Response === 'True') {
		setResult(result.Search)
	}
	if(!input.length) setResult([]);
};

const OnPressSearch = (result, keyword, dispatch) => {
  dispatch(set(result));
  dispatch(setKeyword(keyword));
};

const SearchInput = (props) => {
	const [result, setResult] = useState([]);
	const [keyword, setKeyword] = useState('');
	const dispatch = useDispatch();
	return (<AutoComplete
		options={_mapResultToOptions(result)}
		style={{ width: '100%' }}
		onSelect={() => {}}
		onSearch={(input) => OnSearch(input, setResult, setKeyword)}
	>
		<Input.Search size={'large'} placeholder={'Movie title'} enterButton onSearch={() => OnPressSearch(result, keyword, dispatch)}/>
	</AutoComplete>)
};

export default SearchInput;
