// app/zap/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { 
  PlusOutlined, 
  SearchOutlined, 
  ThunderboltOutlined, 
  FilterOutlined,
  FolderOutlined,
  DeleteOutlined,
  MoreOutlined,
  ReloadOutlined,
  StarOutlined,
  InboxOutlined,
  EditFilled,
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
  Select,
  Tabs,
  Avatar,
  Empty,
  Modal,
  Form,
  message
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import api from 'app/actions/api';
import { set } from 'zod';

const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// Define interface for the API response structure
interface ActionType {
  id: string;
  name: string;
}

interface Action {
  id: string;
  availableActionId: string;
  feriId: string;
  updatedAt: string;
  createdAt: string;
  sortingOrder: number;
  type: ActionType;
}

interface TriggerType {
  id: string;
  name: string;
}

interface Trigger {
  id: string;
  availableTriggerId: string;
  feriId: string;
  updatedAt: string;
  createdAt: string;
  type: TriggerType;
}

interface User {
  id: number;
  name: string;
}

interface FeriApiResponse {
  id: string;
  userId: number;
  name: string;
  status: boolean;
  updatedAt: string;
  createdAt: string;
  user : User;
  trigger: Trigger;
  action: Action[];
  FeriRuns: any[];
}

// Interface for the table data structure
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
    'Spreadsheet': '#0F9D58',
    'Google Sheets': '#0F9D58',
    LinkedIn: '#0077B5',
    HubSpot: '#FF7A59',
    Twitter: '#1DA1F2',
    Instagram: '#E1306C'
  };
  
  const bgColor = colors[app] || '#f0f0f0';
  
  return (
    <Avatar style={{ 
      width: 28, 
      height: 28, 
      backgroundColor: bgColor, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold'
    }}>
      {app?.charAt(0)}
    </Avatar>
  );
};

// Empty state component
const NoDataState = () => (
  <Empty
    image={<InboxOutlined style={{ fontSize: 60, color: '#d9d9d9' }} />}
    imageStyle={{ height: 60 }}
    description={
      <span>No Feri workflows found</span>
    }
  >
    <Button type="primary" icon={<PlusOutlined />}>Create your first workflow</Button>
  </Empty>
);

export default function ZapPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [feriData, setFeriData] = useState<FeriItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [reload , setReload] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiData: FeriApiResponse[] = await api.getAllFeri();
        // const apiData: FeriApiResponse[] = [
        //   {
        //     "id": "43a24523-d59a-4221-9498-7050b65ee48b",
        //     "userId": 1,
        //     "name": "Payment Workflow",
        //     "status": false,
        //     "updatedAt": "2025-04-23T10:25:58.873Z",
        //     "createdAt": "2025-04-23T10:27:09.526Z",
        //     "trigger": {
        //       "id": "531c7f7f-4566-42c7-b967-95a6645c61b3",
        //       "availableTriggerId": "bae38bdd-ddda-4fd5-be82-84343cc526a8",
        //       "feriId": "43a24523-d59a-4221-9498-7050b65ee48b",
        //       "updatedAt": "2025-04-23T10:27:21.382Z",
        //       "createdAt": "2025-04-23T10:27:31.232Z",
        //       "type": {
        //         "id": "bae38bdd-ddda-4fd5-be82-84343cc526a8",
        //         "name": "Slack"
        //       }
        //     },
        //     "action": [
        //       {
        //         "id": "dd79a815-6bd9-406a-8c3d-4834921603f4",
        //         "availableActionId": "73e40104-8bea-4cc3-a8c0-77aa981bed2a",
        //         "feriId": "43a24523-d59a-4221-9498-7050b65ee48b",
        //         "updatedAt": "2025-04-23T10:27:41.853Z",
        //         "createdAt": "2025-04-23T10:27:53.238Z",
        //         "sortingOrder": 0,
        //         "type": {
        //           "id": "73e40104-8bea-4cc3-a8c0-77aa981bed2a",
        //           "name": "Gmail"
        //         }
        //       },
        //       {
        //         "id": "c3d82d86-cbc7-4e7b-be79-7676bc4daa1a",
        //         "availableActionId": "9df5c81e-18b6-4203-ae76-604e1f99fef6",
        //         "feriId": "43a24523-d59a-4221-9498-7050b65ee48b",
        //         "updatedAt": "2025-04-23T10:27:54.873Z",
        //         "createdAt": "2025-04-23T10:28:14.869Z",
        //         "sortingOrder": 1,
        //         "type": {
        //           "id": "9df5c81e-18b6-4203-ae76-604e1f99fef6",
        //           "name": "Spreadsheet"
        //         }
        //       }
        //     ],
        //     "FeriRuns": []
        //   }
        // ];
        console.log('Fetched Feri data:', apiData);
        const transformedData: FeriItem[] = apiData.map(item => {
          const appsUsed = [
            item.trigger?.type.name,
            ...item.action.map(action => action.type.name)
          ];
          const lastModified = getRelativeTimeFromDate(new Date(item.updatedAt));
          
          return {
            key: item.id,
            name: item.name,
            appsUsed,
            owner: item.user.name,
            status: item.status,
            lastModified,
            location: 'Personal'
          };
        });
        
        setFeriData(transformedData);
      } catch (error) {
        console.error('Error fetching Feri data:', error);
        setFeriData([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [reload]);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleFeriCreate = async () => {
    try {
      const values = await form.validateFields();
      
      await api.createFeri(values.feriName);
      setReload(!reload);
      message.success(`Feri "${values.feriName}" created successfully`);
      handleModalCancel();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };


  const getRelativeTimeFromDate = (date: Date): string => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    
    if (diffInHours < 1) return 'just now';
    if (diffInHours < 24) return `${Math.floor(diffInHours)} hours ago`;
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

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
        <Space size={-8}>
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
      render: (owner) => {
        const getInitials = (name: string) => {
          if (!name) return '';
          const names = name.trim().split(' ');
          if (names.length === 1) return (names[0]?.[0] || '').toUpperCase();
          return (names[0]?.[0] || '') + (names[names.length - 1]?.[0] || '').toUpperCase();
        };

        return (
          <Avatar size="small" style={{ backgroundColor: '#7265E6', fontSize: 12 }}>
            {getInitials(owner)}
          </Avatar>
        );
      },
    },
    {
      key: 'action',
      render: () => (
        <Button type="text" icon={<EditFilled/>} size="small" />
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
    <div style={{ padding: '0 20px 20px', background: '#f8f8f8', minHeight: '90vh' }}>
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
            <Button type="primary" onClick={handleCreateClick} icon={<PlusOutlined />}>
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
        
        {feriData.length > 0 ? (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={feriData}
            loading={loading}
            pagination={{ 
              position: ['bottomRight'],
              showSizeChanger: true,
              pageSizeOptions: ['10', '25', '50'],
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
              size: 'small',
              className: 'custom-pagination',
              showLessItems: true,
              selectComponentClass: () => (
                <Select defaultValue="25" style={{ width: 110 , marginRight : "20px" }} size="small">
                  <Option value="10">10 per page</Option>
                  <Option value="25">25 per page</Option>
                  <Option value="50">50 per page</Option>
                </Select>
              )
            }}
            size="middle"
            bordered={false}
            footer={() => null}
          />
        ) : (
          <div style={{ padding: '60px 20px' }}>
            <NoDataState />
          </div>
        )}
      </div>
      
      <div style={{ marginTop: 20, textAlign: 'center', color: '#888', fontSize: 12 }}>
        © 2025 Inferi Inc. | <a href="#" style={{ color: '#888' }}>Legal</a> | <a href="#" style={{ color: '#888' }}>Privacy</a>
      </div>
      <Modal
        title="Create New Feri"
        open={isModalOpen}
        onOk={handleFeriCreate}
        onCancel={handleModalCancel}
        okText="Create"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Feri Name"
            name="feriName"
            rules={[{ required: true, message: "Please enter a Feri name" }]}
          >
            <Input placeholder="Enter Feri name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}