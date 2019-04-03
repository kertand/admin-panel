import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import UserListPage from './components/UserListPage/UserListPage.js';
import HomePage from './components/HomePage/HomePage.js';
import UserDetailPage from './components/UserDetailPage/UserDetailPage.js';
import UserEditPage from './components/UserEditPage/UserEditPage.js';

import { Layout, Menu, Icon, } from 'antd';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [isCollapsed, toogleCollapsed] = React.useState(false);
  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                Home
              </Link>  
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/users">
                <Icon type="user" />
                Users
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={1 ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toogleCollapsed(!isCollapsed)}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
          >
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/users' exact component={UserListPage}></Route>
            <Route path='/users/:id' exact component={UserDetailPage}></Route>
            <Route path='/users/:id/edit' exact component={UserEditPage}></Route>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;