import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { Col, Descriptions, Image, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import { getMovieById } from '../../Services/services';

const { Title } = Typography;
const { Item }= Descriptions;

const DetailPage = () => {
  const { id } = useParams();
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
        <Item span={3}>
          <Title level={5} italic>{data.Plot}</Title>
        </Item>
        <Item label="Actors" span={2}>
          {data.Actors}
        </Item>
        <Item label="Released">
          {data.Released}
        </Item>
        <Item label="Writer" span={2}>
          {data.Writer}
        </Item>
        <Item label="Director">
          {data.Director}
        </Item>
        <Item label="Awards">
          {data.Awards}
        </Item>
        <Item label="Box Office">
          {data.BoxOffice}
        </Item>
        <Item label="Country">
          {data.Country}
        </Item>
        <Item label="Genre">
          {data.Genre}
        </Item>
        <Item label="Language">
          {data.Language}
        </Item>
        <Item label="Rated">
          {data.Rated}
        </Item>
        <Item label="Runtime">
          {data.Runtime}
        </Item>
        <Item label="Title">
          {data.Title}
        </Item>
        <Item label="imdbRating">
          {data.imdbRating}
        </Item>
      </Descriptions>
    </>
  );
};

export default DetailPage;
