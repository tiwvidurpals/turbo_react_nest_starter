import { useState } from 'react';
import {
  FileProtectOutlined,
  GitlabOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import SiderButton from '../../components/SiderButton';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // if()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logoutUser = () => {
    localStorage.removeItem("jwt_token");
  }

  return (
    <Layout
      hasSider={true}
    >
      <Sider
        // trigger={null}
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh' }}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
      >
        <div style={{
          padding: '1rem', display: 'flex',
          justifyContent: 'center',
        }}>
          <img
            src="/haddi.jpg"
            width="50%"
            height="50%"
            alt="expertsLogo"
            style={{
              borderRadius: '50%',
            }}
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key={'1'}>
            <Link to="/">
              <SiderButton text="Dashboard" icon={<HomeOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'2'}>
            <Link to="/leads">
              <SiderButton text="Leads" icon={<GitlabOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'3'}>
            <Link to="/users">
              <SiderButton text="Users" icon={<FileProtectOutlined />} />
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify="space-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Link to="/login">
              <Button
                onClick={logoutUser}
                type="primary"
                style={{ marginRight: '1rem' }}
              >
                Sign Out
              </Button>
            </Link>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export { DashboardLayout };
