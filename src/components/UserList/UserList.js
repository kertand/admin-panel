import React from 'react';
import { useUserDataState } from '../../providers/UserDataProvider/UserDataProvider';
import { Table } from 'antd';



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, item) => <a href={`/users/${item.id}`}>{text}</a>,
  }, {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },{
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  }
];

export default props => {
    const { 
      data: {items, total}, 
      params: {offset, limit},
      loadData
    } = useUserDataState();
    // const d = data.items.data;
    // console.log(items);
    return (
      <React.Fragment>
        <Table 
          dataSource={items} 
          columns={columns} 
          rowKey="id" 
          pagination={
            {
              pageSize: limit, 
              current: offset / limit + 1,
              total: total,
              onChange: (nextPage) => loadData({offset: (nextPage -1) * limit})
            }
          }/>
      </React.Fragment>
    );
};