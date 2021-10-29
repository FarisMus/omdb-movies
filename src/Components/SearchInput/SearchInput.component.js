import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { set, setKeyword } from '../../redux/reducer';
import { getMovieByTitle } from '../../Services';

const _mapResultToOptions = (result) => {
	return result.map(res => ({value: res.Title, id: res.imdbID}));
};

const _onSearch = async (input, setResult, setKeyword) => {
	setKeyword(input);
	const result = await getMovieByTitle(input);
	if (result.Response === 'True') {
		setResult(result.Search);
	}
	if (!input.length) setResult([]);
};

const _onSelect = (option, history) => {
	history.push(`/detail/${option.id}`);
};

const _onPressSearch = (result, keyword, dispatch) => {
	dispatch(set(result));
	dispatch(setKeyword(keyword));
};

const SearchInput = () => {
	const [result, setResult] = useState([]);
	const [keyword, setKeyword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<AutoComplete
			options={_mapResultToOptions(result)}
			style={{width: '100%'}}
			onSelect={(value, option) => _onSelect(option, history)}
			onSearch={(input) => _onSearch(input, setResult, setKeyword)}
		>
			<Input.Search
				size={'large'}
				placeholder={'Movie title'}
				enterButton
				onSearch={() => _onPressSearch(result, keyword, dispatch)}
			/>
		</AutoComplete>);
};

export default SearchInput;
