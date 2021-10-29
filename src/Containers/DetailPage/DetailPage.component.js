import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { Col, Descriptions, Image, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import { getMovieById } from '../../Services';

const {Title} = Typography;

const DetailPage = () => {
	const {id} = useParams();
	const [data, setData] = useState({});

	useAsyncEffect(async () => {
		const result = await getMovieById(id);

		setData(result);
	}, [id]);

	return (
		<>
			<Row align={'middle'}>
				<Col span={6} align={'middle'}>
					<Image src={data.Poster} preview={false}/>
				</Col>
				<Col span={18}>
					<Title level={2}>{data.Title}</Title>
				</Col>
			</Row>
			<Descriptions layout="horizontal" bordered>
				<Descriptions.Item span={3}>
					<Title level={5} italic>{data.Plot}</Title>
				</Descriptions.Item>
				<Descriptions.Item label="Actors" span={2}>
					{data.Actors}
				</Descriptions.Item>
				<Descriptions.Item label="Released">
					{data.Released}
				</Descriptions.Item>
				<Descriptions.Item label="Writer" span={2}>
					{data.Writer}
				</Descriptions.Item>
				<Descriptions.Item label="Director">
					{data.Director}
				</Descriptions.Item>
				<Descriptions.Item label="Awards">
					{data.Awards}
				</Descriptions.Item>
				<Descriptions.Item label="Box Office">
					{data.BoxOffice}
				</Descriptions.Item>
				<Descriptions.Item label="Country">
					{data.Country}
				</Descriptions.Item>
				<Descriptions.Item label="Genre">
					{data.Genre}
				</Descriptions.Item>
				<Descriptions.Item label="Language">
					{data.Language}
				</Descriptions.Item>
				<Descriptions.Item label="Rated">
					{data.Rated}
				</Descriptions.Item>
				<Descriptions.Item label="Runtime">
					{data.Runtime}
				</Descriptions.Item>
				<Descriptions.Item label="Title">
					{data.Title}
				</Descriptions.Item>
				<Descriptions.Item label="imdbRating">
					{data.imdbRating}
				</Descriptions.Item>
			</Descriptions>
		</>
	);
};

export default DetailPage;
