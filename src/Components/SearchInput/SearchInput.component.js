import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Constants from '../../Constants/Constants';
import { set, setKeyword } from '../../redux/Reducer/reducers';
import { getMovieByTitle } from '../../Services/services';

export const _mapResultToOptions = (results) => {
  return results.map(result => ({value: result.Title, id: result.imdbID}));
};

export const _onSearch = async (input, setResult, setKeyword) => {
  setKeyword(input);

  if (!input.length) {
    setResult([]);
    return;
  }

  const result = await getMovieByTitle(input);
  if (result.Response === Constants.API_RESPONSE.TRUE) {
    setResult(result.Search);
  }
};

export const _onSelect = (option, history) => {
  history.push(`/detail/${option.id}`);
};

export const _onPressSearch = (result, keyword, dispatch) => {
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
