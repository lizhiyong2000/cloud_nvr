import React from 'react';

import {Layout, Menu} from 'antd';

import Icon from '@ant-design/icons/lib'
import { Link } from 'umi';

import H from 'history';

import styles from './index.less';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;


const { Header, Footer, Sider, Content } = Layout;


const menuData: { route: string, name: string }[] = [
  { route: '/login', name: '登录' },
  { route: '/users/', name: '用户' },
  { route: '/devices/index', name: '设备' },
];

interface BasicLayoutProps{
  location: H.Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const {
    location: { pathname },
    children,
  } = props;

  // @ts-ignore
  return (

    <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }}>
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Helloworld</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
          >
            <Menu.Item key="2">分析页</Menu.Item>
            <Menu.Item key="3">监控页</Menu.Item>
            <Menu.Item key="4">工作台</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div className={styles.logo}>CloudNvr Admin</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            {menuData.map(menu => (
              <Menu.Item key={`/${menu.route}`}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>CloudNvr by lizhiyong</Footer>
      </Layout>

    </Layout>
  );
};

export default BasicLayout;
