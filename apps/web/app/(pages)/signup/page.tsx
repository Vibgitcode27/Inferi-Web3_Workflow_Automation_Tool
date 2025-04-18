// pages/signup.tsx
"use client";
import React from 'react';
import { Form, Input, Button, Divider, Typography, Row, Col } from 'antd';
import { AppleOutlined, GoogleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import { NextPage } from 'next';

const { Title, Text } = Typography;

interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
}

const SignUp: NextPage = () => {
  const [form] = Form.useForm<SignupFormValues>();
  
  const onFinish = (values: SignupFormValues) => {
    console.log('Form submitted:', values);
    // Add your signup logic here
  };

  const gradientColor = 'linear-gradient(90deg, #4a6bef, #8a63e8)';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left section - Form */}
      <div style={{ 
        padding: '40px', 
        flex: '1', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        background: '#fff'
      }}>
        <div style={{ maxWidth: '400px' }}>
          {/* Logo/Brand */}
          <Text strong style={{ fontSize: '24px', marginBottom: '20px', display: 'block' }}>
            <span style={{ 
              background: gradientColor,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Workflow</span>
          </Text>
          
          {/* Form Title */}
          <div style={{ marginBottom: '30px' }}>
            <Title level={2} style={{ marginBottom: '8px' }}>Create an account</Title>
            <Text type="secondary">Sign up and get 30 day free trial</Text>
          </div>
          
          {/* Signup Form */}
          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="fullName"
              label="Full name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input 
                size="large" 
                placeholder="Enter your full name" 
                style={{ borderRadius: '8px', height: '48px' }} 
              />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input 
                size="large" 
                placeholder="Enter your email" 
                style={{ borderRadius: '8px', height: '48px' }} 
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ borderRadius: '8px', height: '48px' }}
              />
            </Form.Item>
            
            <Form.Item style={{ marginTop: '24px' }}>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large"
                style={{ 
                  background: gradientColor,
                  borderColor: 'transparent',
                  height: '48px',
                  borderRadius: '8px',
                  width: '100%'
                }}
              >
                Submit
              </Button>
            </Form.Item>
            
            <Divider plain>or continue with</Divider>
            
            <Row gutter={16}>
              <Col span={12}>
                <Button 
                  icon={<AppleOutlined />} 
                  style={{
                    height: '48px',
                    borderRadius: '8px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Apple
                </Button>
              </Col>
              <Col span={12}>
                <Button 
                  icon={<GoogleOutlined />} 
                  style={{
                    height: '48px',
                    borderRadius: '8px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Google
                </Button>
              </Col>
            </Row>
            
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Text type="secondary">
                Have an account? <Link href="/login" style={{ color: '#4a6bef' }}>Sign in</Link>
              </Text>
            </div>
          </Form>
        </div>
      </div>
      
      {/* Right section - Image */}
      <div style={{ 
        flex: '1',
        position: 'relative',
        // The image would be placed here
        // Placeholder comment for you to add your image
      }}>
        {/* Add your image or background here */}
        {/* Example: <img src="/your-image-path.jpg" alt="Workflow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
      </div>
    </div>
  );
};

export default SignUp;