// pages/login.tsx
"use client";
import React from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import Link from 'next/link';
import { NextPage } from 'next';
import img from "../../../public/goin.png";

const { Title, Text, Paragraph } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const [form] = Form.useForm<LoginFormValues>();
  
  const onFinish = (values: LoginFormValues) => {
    console.log('Form submitted:', values);
    // Add your login logic here
  };

  // Brand colors
  const primaryColor = '#4a6bef';
  const secondaryColor = '#8a63e8';
  const gradientBg = 'linear-gradient(135deg, rgba(43, 192, 238, 0.24), rgba(99, 115, 232, 0.19))';
  const gradientInBg = 'linear-gradient(135deg, rgba(43, 192, 238, 0.42), rgba(99, 179, 232, 0.48))';
//   const gradientInBg = 'linear-gradient(135deg, rgba(36, 106, 235, 0.34), rgba(112, 99, 232, 0.34))';
  const gradientText = 'linear-gradient(90deg, #4a6bef, #8a63e8)';

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: gradientInBg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1750px',
        height: '94vh',
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Left Section - Branding and Illustration */}
        <div style={{ 
          flex: '1',
          padding: '40px',
          background: gradientBg,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Center illustration placeholder */}
          <div style={{ 
            marginBottom: '40px', 
            width: '500px', 
            height: '450px',
            position: 'relative'
          }}>
            {/* You can add your own illustration/image here */}
            {/* Placeholder for illustration */}
            <div style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '80px',
              opacity: 0.7,
              color: primaryColor,
              userSelect : "none"
            }}>
              <Image height={400} width={400} src={img.src} preview={false}/>
            </div>
          </div>

          <Title level={1} style={{ marginBottom: '16px', color: '#333' }}>
            Inferi Workflow Automation
          </Title>
          <Paragraph style={{ 
            fontSize: '16px', 
            color: '#555',
            maxWidth: '400px'
          }}>
            Unleash your Web3 workflow automation with Inferi — fast, flexible, and built for builders.
          </Paragraph>
        </div>

        {/* Right Section - Login Form */}
        <div style={{ 
          flex: '1',
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
            {/* Logo/Brand */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '40px'
            }}>
              {/* You can replace this with your actual logo */}
              <Title level={2} style={{ margin: 0 }}>
                <Text 
                    style={{ 
                        fontSize: 32, 
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginRight: 10
                    }}
                    >
                    inferi
                    </Text>
                    login
              </Title>
            </div>

            {/* Login Form */}
            <Form
              form={form}
              name="login"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                label="Username or email"
                rules={[{ required: true, message: 'Please enter your username or email' }]}
              >
                <Input 
                  size="large" 
                  placeholder="Enter your username or email" 
                  style={{ 
                    borderRadius: '8px', 
                    height: '50px',
                    borderColor: '#e0e0e0'
                  }} 
                />
              </Form.Item>
              
              <Form.Item
                name="password"
                label="Password"
                style={{ marginBottom: '10px' }}
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                  style={{ 
                    borderRadius: '8px', 
                    height: '50px',
                    borderColor: '#e0e0e0'
                  }}
                />
              </Form.Item>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginBottom: '24px'
              }}>
                <Link href="/forgot-password" style={{ color: primaryColor }}>
                  Forgot password?
                </Link>
              </div>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  style={{ 
                    background: '#212b36',
                    borderColor: '#212b36', 
                    height: '50px',
                    borderRadius: '8px',
                    width: '100%',
                    fontWeight: 500
                  }}
                >
                  Sign in
                </Button>
              </Form.Item>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '24px 0'
              }}>
                <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
                <Text type="secondary" style={{ margin: '0 10px' }}>or</Text>
                <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
              </div>
              
              <Button 
                icon={<GoogleOutlined />} 
                size="large"
                style={{
                  height: '50px',
                  borderRadius: '8px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#e0e0e0'
                }}
              >
                Sign in with Google
              </Button>
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <Text type="secondary">
                  Are you new? <Link href="/signup" style={{ color: primaryColor }}>Create an Account</Link>
                </Text>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;