// app/layout.tsx
"use client";

import { ReactNode, useState } from 'react';
import { 
  HomeOutlined, 
  CompassOutlined, 
  ThunderboltOutlined, 
  AppstoreOutlined, 
  UserOutlined,
  MenuOutlined,
  BellOutlined,
  SettingOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { Layout, Menu, Button, Avatar, Space, Tooltip } from 'antd';

const { Header, Sider, Content } = Layout;

interface MenuItem {
  key: string;
  icon: ReactNode;
  label: string;
  path: string;
}

export default function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const topMenuItems: MenuItem[] = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', path: '/' },
    { key: 'discover', icon: <CompassOutlined />, label: 'Discover', path: '/' },
  ];

  const bottomMenuItems: MenuItem[] = [
    { key: 'feri', icon: <ThunderboltOutlined />, label: 'Feri', path: '/app/feri' },
    { key: 'integrations', icon: <AppstoreOutlined />, label: 'Integrations', path: '/app/integrations' },
  ];

  const userMenuItems: MenuItem[] = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile', path: '/app/profile' },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map(item => (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link href={item.path}>{item.label}</Link>
      </Menu.Item>
    ));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header 
        style={{ 
          padding: '0 16px', 
          background: '#fff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0',
          height: 56
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            type="text" 
            icon={<MenuOutlined />} 
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginRight: 16 }}
          />
          <div 
            style={{ 
              fontSize: 24, 
              fontWeight: 800,
              background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: 40
            }}
          >
            inferi
          </div>
        </div>

        <Space>
          <Button type="primary" ghost size="small">Upgrade</Button>
          <Tooltip title="Notifications">
            <Button type="text" icon={<BellOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Settings">
            <Button type="text" icon={<SettingOutlined />} size="small" />
          </Tooltip>
          <Avatar size="small" icon={<UserOutlined />} />
        </Space>
      </Header>

      <Layout>
        <Sider
          width={200}
          collapsible
          collapsed={collapsed}
          onMouseEnter={() => collapsed && setCollapsed(false)}
          onMouseLeave={() => !collapsed && setCollapsed(true)}
          trigger={null}
          theme="light"
          style={{ borderRight: '1px solid #f0f0f0' }}
        >
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['feri']}
                style={{ borderRight: 0, fontSize: 14 }}
              >
                {renderMenuItems(topMenuItems)}
                <Menu.Divider />
                {renderMenuItems(bottomMenuItems)}
              </Menu>
            </div>
            <div style={{ borderTop: '1px solid #f0f0f0' }}>
              <Menu
                mode="inline"
                style={{ borderRight: 0, fontSize: 14 }}
              >
                {renderMenuItems(userMenuItems)}
              </Menu>
            </div>
          </div>
        </Sider>

        <Content style={{ background: '#f5f5f5', overflow: 'auto' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}