// app/zap/page.tsx
"use client";

import { useState } from 'react';
import { 
  PlusOutlined, 
  SearchOutlined, 
  ThunderboltOutlined, 
  CalendarOutlined,
  FilterOutlined,
  FolderOutlined,
  DeleteOutlined,
  MoreOutlined,
  ReloadOutlined,
  StarOutlined
} from '@ant-design/icons';
import { 
  Button, 
  Input, 
  Table, 
  Space, 
  Typography, 
  Dropdown, 
  Menu, 
  Switch,
  Row,
  Col,
  Select,
  Tabs,
  Tooltip,
  Avatar
} from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

interface FeriItem {
  key: string;
  name: string;
  appsUsed: string[];
  owner: string;
  status: boolean;
  lastModified: string;
  location: string;
}

// App icon component
const AppIcon = ({ app }: { app: string }) => {
  const colors: Record<string, string> = {
    Gmail: '#DB4437',
    Slack: '#4A154B',
    'Google Sheets': '#0F9D58',
    LinkedIn: '#0077B5',
    HubSpot: '#FF7A59',
    Twitter: '#1DA1F2',
    Instagram: '#E1306C'
  };
  
  const bgColor = colors[app] || '#f0f0f0';
  
  return (
    <div style={{ 
      width: 24, 
      height: 24, 
      backgroundColor: bgColor, 
      borderRadius: 4, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold'
    }}>
      {app.charAt(0)}
    </div>
  );
};

export default function ZapPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  
  // Demo data
  const data: FeriItem[] = [
    {
      key: '1',
      name: 'Customer Support Workflow',
      appsUsed: ['Slack', 'Gmail'],
      owner: 'John Doe',
      status: true,
      lastModified: '1 hour ago',
      location: 'Personal'
    },
    {
      key: '2',
      name: 'Lead Generation',
      appsUsed: ['LinkedIn', 'HubSpot'],
      owner: 'Jane Smith',
      status: false,
      lastModified: '16 hours ago',
      location: 'Personal'
    },
    {
      key: '3',
      name: 'Daily Reports',
      appsUsed: ['Google Sheets', 'Slack'],
      owner: 'Mike Johnson',
      status: true,
      lastModified: '2 days ago',
      location: 'Personal'
    },
    {
      key: '4',
      name: 'Social Media Posts',
      appsUsed: ['Twitter', 'Instagram'],
      owner: 'Sarah Williams',
      status: false,
      lastModified: '5 hours ago',
      location: 'Personal'
    },
  ];

  const columns: ColumnsType<FeriItem> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ThunderboltOutlined style={{ color: '#FF6B00', marginRight: 8 }} />
          <span style={{ fontWeight: 500 }}>{text}</span>
        </div>
      ),
    },
    {
      title: 'Apps',
      dataIndex: 'appsUsed',
      key: 'appsUsed',
      render: (apps) => (
        <Space>
          {apps.map((app: string, index: number) => (
            <AppIcon key={index} app={app} />
          ))}
        </Space>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (text) => (
        <Space>
          <FolderOutlined style={{ color: '#777' }} />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Last modified',
      dataIndex: 'lastModified',
      key: 'lastModified',
      sorter: true,
      render: (text) => text,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Switch size="small" checked={status} />,
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      render: () => (
        <Avatar size="small" style={{ backgroundColor: '#7265E6', fontSize: 12 }}>
          VP
        </Avatar>
      ),
    },
    {
      key: 'action',
      render: () => (
        <Button type="text" icon={<MoreOutlined />} size="small" />
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const actionMenu = (
    <Menu>
      <Menu.Item key="1" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: '0 20px 20px', background: '#f8f8f8', minHeight: '100vh' }}>
      {/* Trial notice banner */}
      <div style={{ 
        background: '#fff', 
        borderBottom: '1px solid #eee', 
        padding: '10px 20px',
        marginLeft: -20,
        marginRight: -20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: 24, 
          height: 24, 
          borderRadius: '50%', 
          background: '#5E2CFA', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginRight: 10,
          fontWeight: 'bold'
        }}>
          i
        </div>
        <span>
          Welcome to your Professional trial! You have 13 days to try Inferi's{' '}
          <a href="#" style={{ color: '#5E2CFA' }}>paid features</a>.{' '}
          <a href="#" style={{ color: '#5E2CFA' }}>Upgrade</a> anytime for as low as $19.99 USD/month.
        </span>
      </div>
      
      <Title level={3} style={{ marginBottom: 24 }}>Feri</Title>

      <div style={{ background: 'white', borderRadius: 6, border: '1px solid #e6e6e6', overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
          <Tabs defaultActiveKey="1" style={{ marginBottom: -16 }}>
            <TabPane 
              tab={
                <span>
                  <ThunderboltOutlined /> Feri
                </span>
              } 
              key="1"
            />
            <TabPane 
              tab={
                <span>
                  <FolderOutlined /> Folders
                </span>
              } 
              key="2"
            />
          </Tabs>
          
          <Space>
            <Button type="primary" icon={<DeleteOutlined />} style={{ display: selectedRowKeys.length > 0 ? 'inline-flex' : 'none' }}>
              Trash
            </Button>
            <Button type="primary" icon={<PlusOutlined />}>
              Create
            </Button>
          </Space>
        </div>
        
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
          <Space size="small">
            <Select defaultValue="all" style={{ width: 120 }} size="middle">
              <Option value="all">All</Option>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
            
            <Dropdown overlay={actionMenu} trigger={['click']}>
              <Button icon={<FilterOutlined />}>
                Filters
              </Button>
            </Dropdown>
            
            <Button icon={<StarOutlined />} type="text" />
            <Button icon={<ReloadOutlined />} type="text" />
          </Space>
          
          <Input 
            prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
            placeholder="Search by name or webhook"
            style={{ width: 260 }}
          />
        </div>
        
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ 
            position: ['bottomRight'],
            showSizeChanger: true,
            pageSizeOptions: ['10', '25', '50'],
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
            size: 'small'
          }}
          size="middle"
          bordered={false}
        />
        
        <div style={{ padding: '10px 16px', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ color: '#888', fontSize: 13 }}>
            1-2 of 2
          </div>
          
          <Select defaultValue="25" style={{ width: 110 }} size="small">
            <Option value="10">10 per page</Option>
            <Option value="25">25 per page</Option>
            <Option value="50">50 per page</Option>
          </Select>
        </div>
      </div>
      
      <div style={{ marginTop: 20, textAlign: 'center', color: '#888', fontSize: 12 }}>
        © 2025 Inferi Inc. | <a href="#" style={{ color: '#888' }}>Legal</a> | <a href="#" style={{ color: '#888' }}>Privacy</a>
      </div>
    </div>
  );
}