import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import UserEditPage from './pages/UserEditPage/UserEditPage';
import UserListPage from './pages/UserListPage/UserListPage';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

const App = React.memo(() => {
  const [
    isCollapsed,
    toggleCollapsed
  ] = React.useState(false);

  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
              <Link to="/users">
                Users
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggleCollapsed(!isCollapsed)}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route path='/users' exact component={UserListPage}></Route>
            <Route path='/users/:id/edit' exact component={UserEditPage}></Route>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
});

export default App;
