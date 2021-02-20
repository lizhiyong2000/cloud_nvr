import React from 'react';
import { Layout, Menu } from 'antd';

import Link from 'umi/link';

import styles from './index.less';
const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>CloudNvr Admin</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/login">登录</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users/list">用户</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/devices/index">设备</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>CloudNvr by lizhiyong</Footer>
    </Layout>
  );
};

export default BasicLayout;
