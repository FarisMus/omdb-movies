import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Constants from '../../Constants/Constants'
import { merge } from '../../redux/Reducer/reducers';
import { getMovieByTitle } from '../../Services/services';
import MovieModal from '../MovieModal/MovieModal.component';

export const _loadMoreMovies = async (dispatch, page, setPage, keyword) => {
  const result = await getMovieByTitle(keyword, page + 1);

  setPage(page + 1);
  if (result.Response === Constants.API_RESPONSE.TRUE) {
    dispatch(merge(result.Search));
  }
};

const _isBottomReached = () => (
  (window.innerHeight + window.scrollY) === document.body.scrollHeight
);

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItems] = useState({Title: '', Poster: ''});
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword);
  const movieList = useSelector((state) => state.list);

  useEffect(() => {
    if (movieList.length <= 10) setPage(1);
  }, [movieList]);

  console.log(movieList);

  window.onscroll = async () => {
    if (_isBottomReached() && movieList.length >= 10) {
      await _loadMoreMovies(dispatch, page, setPage, keyword);
    }
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={movieList}
        size={'large'}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.Poster} onClick={() => {
                setIsModalVisible(true);
                setSelectedItems(item);
              }}/>}
              title={<Link to={`/detail/${item.imdbID}`}>{item.Title}</Link>}
              description={item.Year}
            />
          </List.Item>
        )}
      />
      <MovieModal item={selectedItem} show={isModalVisible} onClose={() => setIsModalVisible(false)}/>
    </>
  );
};

export default MovieList;
