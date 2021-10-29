import React from 'react';
import { Divider, Typography } from 'antd';

import SearchInput from '../../Components/SearchInput/SearchInput.component';
import MovieList from '../../Components/MovieList/MovieList.component';

const { Title } = Typography;

function Dashboard() {
	return (
		<div style={{ padding: '5%' }}>
			<Title level={2}>The Open Movie Database Search</Title>
			<SearchInput/>
			<Divider />
			<MovieList/>
		</div>
	);
}

export default Dashboard;
