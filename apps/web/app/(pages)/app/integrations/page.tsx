// app/integrations/page.tsx
"use client";

import { SearchOutlined } from '@ant-design/icons';
import { Card, Input, Row, Col, Typography, Space, Tag } from 'antd';

const { Title, Paragraph } = Typography;

// Demo integrations data
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

const IntegrationCard = ({ integration }: { integration: typeof integrations[0] }) => (
  <Card 
    hoverable 
    style={{ marginBottom: 16 }}
    bodyStyle={{ padding: 16 }}
  >
    <div style={{ fontSize: 24, marginBottom: 8 }}>{integration.icon}</div>
    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>{integration.name}</Title>
    <Paragraph type="secondary" style={{ fontSize: 13, marginBottom: 8 }}>
      {integration.description}
    </Paragraph>
    <Tag color="default">{integration.category}</Tag>
  </Card>
);

export default function IntegrationsPage() {
  return (
    <div style={{ padding: 20 }}>
      <Title level={4} style={{ marginBottom: 4 }}>Integrations</Title>
      <Paragraph type="secondary" style={{ marginBottom: 16 }}>
        Connect your favorite apps and services
      </Paragraph>

      <Input
        placeholder="Search integrations..."
        prefix={<SearchOutlined />}
        style={{ maxWidth: 400, marginBottom: 24 }}
      />

      <Row gutter={16}>
        {integrations.map((integration) => (
          <Col key={integration.id} xs={24} sm={12} md={8} lg={6}>
            <IntegrationCard integration={integration} />
          </Col>
        ))}
      </Row>
    </div>
  );
}