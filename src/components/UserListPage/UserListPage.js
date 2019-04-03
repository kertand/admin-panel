import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

		const dataSource = [{
		  key: '1',
		  name: 'Mike',
		  age: 32,
		  address: '10 Downing Street'
		}, {
		  key: '2',
		  name: 'John',
		  age: 42,
		  address: '10 Downing Street'
		}];

		const columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		  render: (name, { key }) => (<Link to={`/users/${key}`}>{name}</Link>),
		}, {
		  title: 'Age',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		  key: 'address',
		}];
		const UserListPage = ({ match }) => (
			<Table dataSource={dataSource} columns={columns} />
				);
	
export default UserListPage;