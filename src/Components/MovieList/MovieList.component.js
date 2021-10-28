import React, { useState, useEffect } from 'react';
import { Avatar, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { merge } from '../../redux/reducer';
import { getMovieByTitle } from '../../Services';

const _loadMoreMovies = async (dispatch, page, setPage, keyword) => {
	setPage(page + 1);
	const result = await getMovieByTitle(keyword, page + 1);
	if(result.Response === 'True') {
		dispatch(merge(result.Search));
	}
};

const MovieList = (props) => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const keyword = useSelector((state) => state.keyword);
	const movieList = useSelector((state) => state.list);

	useEffect(() => {
		if(movieList.length <= 10) setPage(1);
	}, [movieList]);

	window.onscroll = async () => {
		if (((window.innerHeight + window.scrollY) === document.body.scrollHeight) &&  movieList.length >= 10) {
			await _loadMoreMovies(dispatch, page, setPage, keyword);
		}
	};

	return (
		<List
			itemLayout="horizontal"
			dataSource={movieList}
			renderItem={item => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={item.Poster} />}
						title={<a href="https://ant.design">{item.Title}</a>}
						description={item.Year}
					/>
				</List.Item>
			)}
		/>
	)
};

export default MovieList;
