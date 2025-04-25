"use client";
import { SearchOutlined } from '@ant-design/icons';
import { Card, Input, Row, Col, Typography, Tag, Button } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

// Sample integrations data
const integrations = [
  {
    id: '1',
    name: 'Slack',
    description: 'Connect with Slack to send messages and notifications',
    category: 'Communication',
    icon: '🔔'
  },
  {
    id: '2',
    name: 'Gmail',
    description: 'Send and receive emails via Gmail',
    category: 'Email',
    icon: '✉️'
  },
  {
    id: '3',
    name: 'Google Sheets',
    description: 'Create and update spreadsheets',
    category: 'Productivity',
    icon: '📊'
  },
  {
    id: '4',
    name: 'Twitter',
    description: 'Post tweets and monitor mentions',
    category: 'Social Media',
    icon: '🐦'
  },
  {
    id: '5',
    name: 'HubSpot',
    description: 'Manage contacts and track customer interactions',
    category: 'CRM',
    icon: '👥'
  },
  {
    id: '6',
    name: 'Stripe',
    description: 'Process payments and manage subscriptions',
    category: 'Finance',
    icon: '💳'
  },
];

// Add this CSS to your integration.css file
const styles = `
.integration-card {
  border-radius: 16px;
  border: 1px solid rgba(230, 230, 250, 0.3);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.integration-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(74, 107, 239, 0.15);
  border-color: rgba(138, 99, 232, 0.3);
}

.integration-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4a6bef, #8a63e8);
  transition: height 0.2s ease;
}

.integration-card:hover::before {
  height: 6px;
}

.integration-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.integration-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(74, 107, 239, 0.1), rgba(138, 99, 232, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-right: 16px;
  box-shadow: 0 4px 8px rgba(74, 107, 239, 0.1);
}

.integration-title {
  margin: 0 !important;
  font-weight: 600 !important;
  font-size: 20px !important;
}

.integration-desc {
  margin-bottom: 24px !important;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  line-height: 1.5;
}

.integration-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.integration-tag {
  border-radius: 20px;
  font-size: 14px;
  padding: 4px 16px;
  background: linear-gradient(90deg, rgba(74, 107, 239, 0.1), rgba(138, 99, 232, 0.1));
  border: none;
  color: #4a6bef;
}

.connect-button {
  background: linear-gradient(90deg, #4a6bef, #8a63e8);
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 15px;
  height: 36px;
  padding: 0 20px;
  transition: all 0.3s ease;
}

.connect-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(74, 107, 239, 0.2);
}

.page-title {
  background: linear-gradient(90deg, #4a6bef, #8a63e8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: 700 !important;
  margin-bottom: 8px !important;
  font-size: 28px !important;
}

.search-input {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 48px;
  font-size: 16px;
}

.search-input:hover, .search-input:focus {
  box-shadow: 0 6px 16px rgba(74, 107, 239, 0.1);
  border-color: #8a63e8;
}

.page-container {
  padding: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.integrations-grid {
  margin-top: 24px;
}
`;

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

const IntegrationCard: React.FC<{ integration: Integration }> = ({ integration }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Card
      className="integration-card"
      bodyStyle={{ padding: 32, display: 'flex', flexDirection: 'column', height: '100%' }}
      hoverable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="integration-header">
        <div className="integration-icon-wrapper">
          {integration.icon}
        </div>
        <Title level={4} className="integration-title">{integration.name}</Title>
      </div>
      
      <Paragraph className="integration-desc">{integration.description}</Paragraph>
      
      <div className="integration-card-footer">
        <Tag className="integration-tag">{integration.category}</Tag>
        
        <Button 
          className="connect-button"
          size="middle"
          style={{
            opacity: isHovered ? 1 : 0.85,
            transform: isHovered ? 'scale(1.03)' : 'scale(1)'
          }}
        >
          Connect
        </Button>
      </div>
    </Card>
  );
};

export default function IntegrationsPage() {
  return (
    <div className="page-container">
      <style>{styles}</style>
      
      <Typography.Title className="page-title" level={3}>Inferi Integrations</Typography.Title>
      <Paragraph type="secondary" style={{ marginBottom: 24, fontSize: 16 }}>
        Supercharge your Web3 workflows with <strong>Inferi</strong> integrations
      </Paragraph>

      <Input
        className="search-input"
        placeholder="Search integrations..."
        prefix={<SearchOutlined style={{ color: '#8a63e8', fontSize: 18 }} />}
        style={{
          maxWidth: 500,
          marginBottom: 24,
        }}
      />

      <Row gutter={[20, 20]} className="integrations-grid">
        {integrations.map((integration) => (
          <Col key={integration.id} xs={24} sm={12} md={8} lg={8}>
            <IntegrationCard integration={integration} />
          </Col>
        ))}
      </Row>
    </div>
  );
}