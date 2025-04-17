// app/feriflow/page.tsx
"use client";

import { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Panel,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MarkerType,
  Connection,
  Edge,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, Tabs, List, Avatar, Button, Typography, Divider, Select, Input } from 'antd';
import {
  ThunderboltOutlined,
  AppstoreOutlined,
  PlusOutlined,
  SearchOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// Node types
const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
};

// Trigger Node Component
function TriggerNode({ data }) {
  return (
    <div className="rounded-lg border border-blue-200 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        {data.icon && <div className="text-blue-500">{data.icon}</div>}
        <div>
          <div className="font-medium">{data.label}</div>
          <div className="text-xs text-gray-500">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

// Action Node Component
function ActionNode({ data }) {
  return (
    <div className="rounded-lg border border-purple-200 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        {data.icon && <div className="text-purple-500">{data.icon}</div>}
        <div>
          <div className="font-medium">{data.label}</div>
          <div className="text-xs text-gray-500">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

// Mock data for triggers and actions
const TRIGGERS = [
  {
    id: 'gmail',
    name: 'Gmail',
    icon: '📧',
    events: [
      { id: 'new_email', name: 'New Email', description: 'Triggers when a new email is received' },
      { id: 'new_labeled_email', name: 'New Labeled Email', description: 'Triggers when an email with a specific label is received' },
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: '💬',
    events: [
      { id: 'new_message', name: 'New Message', description: 'Triggers when a new message is posted' },
      { id: 'new_channel', name: 'New Channel', description: 'Triggers when a new channel is created' },
    ]
  },
  {
    id: 'calendar',
    name: 'Google Calendar',
    icon: '📅',
    events: [
      { id: 'new_event', name: 'New Event', description: 'Triggers when a new event is created' },
      { id: 'event_start', name: 'Event Start', description: 'Triggers when an event is about to start' },
    ]
  },
];

const ACTIONS = [
  {
    id: 'sheets',
    name: 'Google Sheets',
    icon: '📊',
    actions: [
      { id: 'create_row', name: 'Create Row', description: 'Creates a new row in a specified sheet' },
      { id: 'update_row', name: 'Update Row', description: 'Updates an existing row in a sheet' },
    ]
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: '🎮',
    actions: [
      { id: 'send_message', name: 'Send Message', description: 'Sends a message to a channel' },
      { id: 'create_channel', name: 'Create Channel', description: 'Creates a new channel' },
    ]
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: '📝',
    actions: [
      { id: 'create_page', name: 'Create Page', description: 'Creates a new page' },
      { id: 'update_database', name: 'Update Database', description: 'Updates a database item' },
    ]
  },
];

export default function FeriFlowPage() {
  // Initial nodes setup
  const initialNodes = [
    {
      id: '1',
      type: 'trigger',
      position: { x: 250, y: 100 },
      data: { 
        label: 'Start Here', 
        description: 'Add a trigger to start your flow',
        icon: <ThunderboltOutlined />
      }
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [flowName, setFlowName] = useState('Untitled Flow');
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(
      { 
        ...params, 
        animated: true,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#8a63e8',
        },
      }, 
      eds
    )),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow/type');
      const item = JSON.parse(event.dataTransfer.getData('application/reactflow/item'));

      // Check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      
      const newNode = {
        id: `${type}_${Date.now()}`,
        type,
        position,
        data: { 
          label: item.name,
          description: item.description,
          icon: type === 'trigger' ? <ThunderboltOutlined /> : <AppstoreOutlined />,
          app: selectedApp,
          event: item.id
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, selectedApp, setNodes]
  );

  const onDragStart = (event, item, type) => {
    event.dataTransfer.setData('application/reactflow/type', type);
    event.dataTransfer.setData('application/reactflow/item', JSON.stringify(item));
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleAppSelect = (app) => {
    setSelectedApp(app);
    setSelectedEvent(null);
  };

  return (
    <div className="h-full bg-white">
      <div className="flex flex-col h-full">
        {/* Flow header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Input 
              value={flowName}
              onChange={(e) => setFlowName(e.target.value)}
              bordered={false}
              className="text-xl font-semibold px-0"
              style={{ width: 300 }}
            />
            <div className="text-gray-400">|</div>
            <Select 
              placeholder="Draft" 
              className="w-32"
              bordered={false}
            >
              <Option value="draft">Draft</Option>
              <Option value="published">Published</Option>
              <Option value="paused">Paused</Option>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button>Test</Button>
            <Button type="primary">Publish</Button>
          </div>
        </header>

        {/* Main area with sidebar and canvas */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left sidebar for triggers and actions */}
          <div className="w-72 border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <Input
                placeholder="Search triggers & actions"
                prefix={<SearchOutlined className="text-gray-400" />}
                className="mb-4"
              />
              
              <Tabs defaultActiveKey="triggers">
                <TabPane 
                  tab={
                    <span className="flex items-center gap-1">
                      <ThunderboltOutlined />
                      Triggers
                    </span>
                  } 
                  key="triggers"
                >
                  <div className="space-y-4">
                    {selectedApp ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Text strong>
                            {TRIGGERS.find(t => t.id === selectedApp)?.name || 'App'}
                          </Text>
                          <Button 
                            type="text" 
                            size="small" 
                            onClick={() => setSelectedApp(null)}
                          >
                            Back
                          </Button>
                        </div>
                        <List
                          dataSource={TRIGGERS.find(t => t.id === selectedApp)?.events || []}
                          renderItem={item => (
                            <List.Item
                              className="cursor-grab rounded hover:bg-gray-50 p-2"
                              draggable
                              onDragStart={(event) => onDragStart(event, item, 'trigger')}
                            >
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                              </div>
                            </List.Item>
                          )}
                        />
                      </>
                    ) : (
                      <List
                        dataSource={TRIGGERS}
                        renderItem={app => (
                          <List.Item 
                            className="cursor-pointer rounded hover:bg-gray-50 p-2"
                            onClick={() => handleAppSelect(app.id)}
                          >
                            <div className="flex items-center gap-3">
                              <Avatar>{app.icon}</Avatar>
                              <div>{app.name}</div>
                            </div>
                            <ArrowRightOutlined className="text-gray-400" />
                          </List.Item>
                        )}
                      />
                    )}
                  </div>
                </TabPane>
                
                <TabPane 
                  tab={
                    <span className="flex items-center gap-1">
                      <AppstoreOutlined />
                      Actions
                    </span>
                  } 
                  key="actions"
                >
                  <div className="space-y-4">
                    {selectedApp ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Text strong>
                            {ACTIONS.find(a => a.id === selectedApp)?.name || 'App'}
                          </Text>
                          <Button 
                            type="text" 
                            size="small" 
                            onClick={() => setSelectedApp(null)}
                          >
                            Back
                          </Button>
                        </div>
                        <List
                          dataSource={ACTIONS.find(a => a.id === selectedApp)?.actions || []}
                          renderItem={item => (
                            <List.Item
                              className="cursor-grab rounded hover:bg-gray-50 p-2"
                              draggable
                              onDragStart={(event) => onDragStart(event, item, 'action')}
                            >
                              <div className="w-full">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                              </div>
                            </List.Item>
                          )}
                        />
                      </>
                    ) : (
                      <List
                        dataSource={ACTIONS}
                        renderItem={app => (
                          <List.Item 
                            className="cursor-pointer rounded hover:bg-gray-50 p-2"
                            onClick={() => handleAppSelect(app.id)}
                          >
                            <div className="flex items-center gap-3">
                              <Avatar>{app.icon}</Avatar>
                              <div>{app.name}</div>
                            </div>
                            <ArrowRightOutlined className="text-gray-400" />
                          </List.Item>
                        )}
                      />
                    )}
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>

          {/* Flow canvas */}
          <div className="flex-1 h-full" ref={reactFlowWrapper}>
            <ReactFlowProvider>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
              >
                <Background color="#f0f0f0" gap={16} />
                <Controls />
                <Panel position="top-right">
                  <Card size="small" className="shadow-sm">
                    <div className="space-y-2">
                      <Text type="secondary">Flow Status</Text>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <Text>Draft</Text>
                      </div>
                    </div>
                  </Card>
                </Panel>
              </ReactFlow>
            </ReactFlowProvider>
          </div>
        </div>
      </div>
    </div>
  );
}