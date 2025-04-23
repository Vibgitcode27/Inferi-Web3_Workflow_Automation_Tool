
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Button,  
  Row, 
  Col, 
  Space, 
  Flex,
  Avatar
} from 'antd';
import backgroundImage from '../../public/download.webp';
import '@xyflow/react/dist/style.css';
import styles from "../styles/main.module.css"
import webhookImage from '../../public/cdnlogo.com_webhook.svg';
import blockchainImage from '../../public/blockchain.png';
import nft from '../../public/nft.png';
import { Features } from './Features';
const { Title, Paragraph, Text } = Typography;

export default function HomeContent() {
  const [animated, setAnimated] = useState(false);
  // Handle animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Fade-in animation style for sections
  const fadeInStyle = (delay: number) => ({
    opacity: animated ? 1 : 0,
    transform: animated ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <>
      {/* Hero Section */}
      <div 
        style={{ 
          padding: '140px 5% 120px',
          backgroundImage: `url(${backgroundImage.src})`,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Flex align='center' justify='center' gap={20} style={{ marginBottom: 60 }}>
          <Button style={{ height : "45px" , backgroundColor : "transparent" , borderRadius : "20px" , fontWeight : "800" , fontSize : "15px"}}><Avatar src={webhookImage.src}/> Blockchain Event Triggers</Button>
          <Button style={{ height : "45px" , backgroundColor : "transparent" , borderRadius : "20px" , fontWeight : "800" , fontSize : "15px"}}><Avatar size={40} src={blockchainImage.src}/> Gas Fee Optimization</Button>
          <Button style={{ height : "45px" , backgroundColor : "transparent" , borderRadius : "20px" , fontWeight : "800" , fontSize : "15px"}}><Avatar size={55} src={nft.src} style={{ marginRight : "-10px" , marginLeft : "-7px"}}/> Real-Time NFT Minting</Button>
        </Flex>
        <div style={fadeInStyle(0)}>
          <Title 
            level={1} 
            style={{ 
              fontSize: 80, 
              fontWeight: 800, 
              marginBottom: 24,
              maxWidth: 1000,
              margin: '0 auto -15px'
            }}
          >
            Run Your Business
          </Title>
          <Title 
            level={1} 
            style={{ 
              fontSize: 80, 
              fontWeight: 800, 
              marginBottom: 24,
              maxWidth: 1400,
              margin: '0 auto 34px'
            }}
          >
            <span className={styles.heroText}>with On-Chain Automation</span> 
          </Title>
          <Paragraph 
            style={{ 
              fontSize: 23, 
              color: '#555',
              maxWidth: 1200,
              margin: '0 auto 40px'
            }}
          >
            Connect your blockchain operations with popular apps and services. Build powerful automated feries without writing a single line of code.
          </Paragraph>
          
          <Space size="large">
            <Button 
              type="primary" 
              shape="round" 
              size="large"
              style={{ 
                height: 50, 
                padding: '0 32px', 
                fontSize: 16,
                fontWeight: 600,
                background: "black",
                borderColor: 'transparent',
                boxShadow: '0 4px 12px rgba(74, 107, 239, 0.25)'
              }}
            >
              Start Building Feries
            </Button>
            <Button 
              shape="round" 
              size="large" 
              style={{ 
                height: 50, 
                padding: '0 32px', 
                fontSize: 16,
                border: '2px solid black',
                color: 'black',
                fontWeight : "800"
              }}
            >
              Watch Demo
            </Button>
          </Space>
        </div>
        <div>
          <Flex align='center' justify='space-between' style={{ marginBottom: "-100px" , marginTop : "20px" , width : "100%" }}>
            <div>
              <Button style={{ height : "45px" , backgroundColor : "transparent" , border : "none" , fontWeight : "800" , fontSize : "18px"}}> Create Integrate</Button>
              <div className="h-1 w-full rounded-xl bg-gradient-to-r from-[#4a6bef] to-[#8a63e8]"></div>
            </div>
            <div>
              <Button style={{ height : "45px" , backgroundColor : "transparent" , border : "none" , fontWeight : "800" , fontSize : "18px"}}> Set on autopilot</Button>
              <div className="h-1 w-full rounded-xl bg-gradient-to-r from-[#4a6bef] to-[#8a63e8]"></div>
            </div>
          </Flex>
        </div>
      </div>
      
      {/* Features Section */}
      <div style={{ padding: '60px 5%', background: 'white' }} id="features">
        <div
          style={{
            maxWidth: 1700,
            width: 1750,
            padding: '60px 70px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f5f7ff, #e9e5ff)', // lighter version of your logo gradient
            borderRadius: '30px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{ maxWidth: 1500, margin: '0 auto', textAlign: 'center' }}>
            <div style={fadeInStyle(0)}>
              <Title level={2} style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
                Features that <span style={{ 
                  background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Power</span> Your Workflow
              </Title>

              <Paragraph style={{ fontSize: 20, color: '#444', maxWidth: 600, margin: '0 auto 64px' }}>
                Inferi combines powerful Web3 functionality with ease of use to automate your blockchain operations.
              </Paragraph>
            </div>

            <Features />
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div 
        style={{ 
          padding: '120px 5%', 
          background: 'linear-gradient(180deg, white, #f5f8ff)', 
          position: 'relative',
          overflow: 'hidden'
        }} 
        id="how-it-works"
      >
        <div 
          style={{ 
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: 300,
            background: 'radial-gradient(circle, rgba(74, 107, 239, 0.05) 0%, transparent 70%)',
            top: -300,
            right: -200
          }}
        />
        
        <div 
          style={{ 
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: 200,
            background: 'radial-gradient(circle, rgba(138, 99, 232, 0.05) 0%, transparent 70%)',
            bottom: -200,
            left: -100
          }}
        />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={fadeInStyle(0)}>
            <Title level={2} style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
              How Inferi <Text style={{ 
                background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Works</Text>
            </Title>
            
            <Paragraph style={{ fontSize: 20, color: '#666', maxWidth: 600, margin: '0 auto 64px' }}>
              Building powerful feries is simple with our three-step process.
            </Paragraph>
          </div>
          
          <Row gutter={[48, 48]} align="middle">
            {[
              {
                step: 1,
                color: '#4a6bef',
                title: 'Choose a Trigger',
                desc: 'Select from a variety of Web3 triggers like new transactions, smart contract events, or token transfers.'
              },
              {
                step: 2,
                color: '#8a63e8',
                title: 'Configure Actions',
                desc: 'Define what happens when your trigger fires. Send notifications, update databases, or execute transactions.'
              },
              {
                step: 3,
                color: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
                title: 'Activate Your Feri',
                desc: 'Turn on your feri and let Inferi handle the automation. Monitor performance in real-time from your dashboard.'
              }
            ].map((step, index) => (
              <Col xs={24} md={8} key={index}>
                <div style={fadeInStyle(0.2 + index * 0.1)}>
                  <div
                    style={{ 
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      background: typeof step.color === 'string' && step.color.includes('gradient') ? 
                        step.color : 'white',
                      color: typeof step.color === 'string' && step.color.includes('gradient') ? 
                        'white' : step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 32,
                      fontWeight: 700,
                      margin: '0 auto 24px',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                      border: typeof step.color === 'string' && step.color.includes('gradient') ?
                        'none' : `2px solid ${step.color}`
                    }}
                  >
                    {step.step}
                  </div>
                  <Title level={3} style={{ fontSize: 24, marginBottom: 16 }}>{step.title}</Title>
                  <Paragraph style={{ color: '#666', fontSize: 16 }}>{step.desc}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      
      {/* CTA Section */}
      <div
        style={{ 
          padding: '120px 5%',
          background: 'linear-gradient(135deg, #4a6bef, #8a63e8)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: 300,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            top: -200,
            left: -200
          }}
        />
        
        <div 
          style={{ 
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: 200,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
            bottom: -100,
            right: -100
          }}
        />
        
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={fadeInStyle(0)}>
            <Title level={2} style={{ fontSize: 48, fontWeight: 800, marginBottom: 24, color: 'white' }}>
              Ready to Automate Your Web3 Workflows?
            </Title>
            
            <Paragraph style={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.9)', maxWidth: 600, margin: '0 auto 40px' }}>
              Join thousands of developers and businesses building powerful blockchain automation with Inferi.
            </Paragraph>
            
            <Space size="large">
              <Button 
                size="large" 
                shape="round" 
                style={{ 
                  background: 'white', 
                  color: '#4a6bef',
                  height: 50,
                  padding: '0 32px',
                  fontSize: 16,
                  fontWeight: 600
                }}
              >
                Get Started for Free
              </Button>
              <Button 
                ghost 
                size="large" 
                shape="round"
                style={{ 
                  height: 50,
                  padding: '0 32px',
                  fontSize: 16
                }}
              >
                Book a Demo
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}