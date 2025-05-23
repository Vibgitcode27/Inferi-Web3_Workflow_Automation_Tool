// components/Navbar.js
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from 'lib/hooks';
import pfp from '../../public/pfp.png';
import { 
  Layout, 
  Button, 
  Typography, 
  Menu, 
  Drawer,
  Space,
  Divider,
  Avatar
} from 'antd';
import {
  MenuOutlined,
  GithubOutlined,
  XOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    { key: 'features', label: 'Features' },
    { key: 'how-it-works', label: 'How It Works' },
    { key: 'integrations', label: 'Integrations' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'docs', label: 'Docs' },
    { 
      key: 'community', 
      label: 'Community', 
      children: [
        { key: 'forum', label: 'Forum' },
        { key: 'discord', label: 'Discord' },
        { key: 'github', label: 'GitHub' }
      ]
    },
  ];

  return (
    <Header 
      style={{ 
      background: scrolled ? 'rgba(251, 251, 251, 0.68)' : 'rgba(255, 255, 255, 0.8)',
      padding: '2% 1% 2% 7%',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text 
          style={{ 
            fontSize: 32, 
            fontWeight: 800,
            background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginRight: 40
          }}
        >
          inferi
        </Text>

        <Menu 
          mode="horizontal" 
          style={{ 
            border: 'none', 
            background: 'transparent',
            fontSize: 17,
            fontWeight: 500,
            display: 'flex',
            color : "gray"
          }}
          items={menuItems}
        />
      </div>

      {token != "" ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Space size={20}>
              <div>
                <Button type="text" icon={<GithubOutlined />} />
                <Button type="text" icon={<XOutlined />} />
              </div>
              <Button 
                type="primary" 
                shape="round" 
                style={{ 
                  background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(2, 2, 2))',
                  borderColor: 'transparent',
                  boxShadow: '0 2px 12px rgba(50, 50, 51, 0.25)',
                  color : "white",
                }}
                onClick={() => {router.push("/app/feri")}}
              >
                Dashboard
              </Button>
              <Avatar src={pfp.src}/>
            </Space>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuVisible(true)}
              style={{ 
                display: 'none', 
                fontSize: 18
              }}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Space>
              <Button type="text" icon={<GithubOutlined />} />
              <Button type="text" icon={<XOutlined />} />
              <Button type="link" onClick={() => {router.push("/login")}}>Log In</Button>
              <Button 
                type="primary" 
                shape="round" 
                style={{ 
                  background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
                  borderColor: 'transparent',
                  boxShadow: '0 4px 12px rgba(74, 107, 239, 0.25)'
                }}
                onClick={() => {router.push("/signup")}}
              >
                Get Started
              </Button>
            </Space>
            
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuVisible(true)}
              style={{ 
                display: 'none', 
                fontSize: 18
              }}
            />
          </div>
        )}

      <Drawer
        title={
          <Text 
            style={{ 
              fontSize: 24, 
              fontWeight: 800,
              background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            inferi
          </Text>
        }
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
      >
        <Menu
          mode="vertical"
          style={{ border: 'none' }}
          items={menuItems}
        />
        
        <Divider />
        {token != "" ? (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Avatar src={pfp.src}></Avatar>
            <Button 
              type="primary" 
              block
              style={{ 
                background: 'linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255))',
                borderColor: 'transparent',
                border : "2px solid black",
                color : "black",
              }}
              onClick={() => {router.push("/signup")}}
            >
              Dashboard
            </Button>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 16 }}>
              <Button type="text" icon={<GithubOutlined />} />
              <Button type="text" icon={<XOutlined />} />
            </div>
          </Space>
        ) : (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button type="default" block>Log In</Button>
            <Button 
              type="primary" 
              block
              style={{ 
                background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
                borderColor: 'transparent'
              }}
              onClick={() => {router.push("/signup")}}
            >
              Get Started
            </Button>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 16 }}>
              <Button type="text" icon={<GithubOutlined />} />
              <Button type="text" icon={<XOutlined />} />
            </div>
          </Space>
        )}
      </Drawer>
    </Header>
  );
};

export default Navbar;