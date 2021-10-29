import React, { useEffect, useState } from 'react';
import { Avatar, Image, List, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { merge } from '../../redux/reducer';
import { getMovieByTitle } from '../../Services';

const _loadMoreMovies = async (dispatch, page, setPage, keyword) => {
	setPage(page + 1);
	const result = await getMovieByTitle(keyword, page + 1);
	if (result.Response === 'True') {
		dispatch(merge(result.Search));
	}
};

const MovieList = (props) => {
	const [page, setPage] = useState(1);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedItem, setSelectedItems] = useState({Title: '', Poster: ''});
	const dispatch = useDispatch();
	const keyword = useSelector((state) => state.keyword);
	const movieList = useSelector((state) => state.list);

	useEffect(() => {
		if (movieList.length <= 10) setPage(1);
	}, [movieList]);

	window.onscroll = async () => {
		if (((window.innerHeight + window.scrollY) === document.body.scrollHeight) && movieList.length >= 10) {
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
			<Modal title={selectedItem.Title} visible={isModalVisible} onOk={() => setIsModalVisible(false)}
			       onCancel={() => setIsModalVisible(false)}>
				<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
					<Image src={selectedItem.Poster} preview={false}/>
				</div>
			</Modal>
		</>
	);
};

export default MovieList;
