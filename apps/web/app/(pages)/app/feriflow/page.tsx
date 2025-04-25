// app/feriflow/page.tsx
"use client";

import { useState, useCallback, useRef } from 'react';
import { 
  ReactFlow, 
  ReactFlowProvider,
  Panel,
  Background, 
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  MarkerType,
  Node,
  NodeTypes,
  ReactFlowInstance,
  Handle,
  Position,
  NodeProps
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, Tabs, List, Avatar, Button, Typography, Input, Select, message, Popconfirm } from 'antd';
import {
  ThunderboltOutlined,
  AppstoreOutlined,
  SearchOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

interface TriggerEvent {
  id: string;
  name: string;
  description: string;
}

interface AppAction {
  id: string;
  name: string;
  description: string;
}

interface AppData {
  id: string;
  name: string;
  icon: string;
  events?: TriggerEvent[];
  actions?: AppAction[];
}

interface NodeData {
  label: string;
  description: string;
  icon?: React.ReactNode;
  app?: string | null;
  event?: string;
}

// Custom node component for triggers with handle at the bottom
function TriggerNode({ data, id }: NodeProps<NodeData>) {
  return (
    <div className="rounded-lg border-2 border-blue-300 bg-white p-3 shadow-md w-48">
      <div className="flex items-center gap-3">
        {data.icon && <div className="text-blue-500 text-xl">{data.icon}</div>}
        <div>
          <div className="font-medium">{data.label}</div>
          <div className="text-xs text-gray-500">{data.description}</div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="source"
        style={{ background: '#4287f5', width: '10px', height: '10px', bottom: '-6px' }}
      />
    </div>
  );
}

// Action node with handles on top and bottom
function ActionNode({ data, id }: NodeProps<NodeData>) {
  return (
    <div className="rounded-lg border-2 border-purple-300 bg-white p-3 shadow-md w-48">
      <Handle
        type="target"
        position={Position.Top}
        id="target"
        style={{ background: '#8a63e8', width: '10px', height: '10px', top: '-6px' }}
      />
      <div className="flex items-center gap-3">
        {data.icon && <div className="text-purple-500 text-xl">{data.icon}</div>}
        <div>
          <div className="font-medium">{data.label}</div>
          <div className="text-xs text-gray-500">{data.description}</div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="source"
        style={{ background: '#8a63e8', width: '10px', height: '10px', bottom: '-6px' }}
      />
    </div>
  );
}

// Node types with proper typing
const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
};

// Mock data for triggers and actions
const TRIGGERS: AppData[] = [
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
  // Web3 triggers
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: '🔷',
    events: [
      { id: 'new_transaction', name: 'New Transaction', description: 'Triggers when a new transaction is detected' },
      { id: 'address_activity', name: 'Address Activity', description: 'Triggers when activity is detected for an address' },
    ]
  },
];

const ACTIONS: AppData[] = [
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
  // Web3 specific actions
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: '🔷',
    actions: [
      { id: 'watch_address', name: 'Watch Address', description: 'Monitors an Ethereum address for activity' },
      { id: 'smart_contract', name: 'Smart Contract', description: 'Executes a smart contract function' },
      { id: 'transfer_eth', name: 'Transfer ETH', description: 'Transfers ETH to an address' },
    ]
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    icon: '🌊',
    actions: [
      { id: 'nft_listing', name: 'NFT Listing', description: 'Creates a new NFT listing' },
      { id: 'track_sales', name: 'Track Sales', description: 'Tracks NFT sales for a collection' },
    ]
  },
];

// Define custom node type for the flow
interface CustomNode extends Node<NodeData> {
  type: 'trigger' | 'action';
}

export default function FeriFlowPage() {
  // Initial nodes setup
  const initialNodes: CustomNode[] = [
    {
      id: '1',
      type: 'trigger',
      position: { x: 250, y: 100 },
      data: { 
        label: 'Start Here', 
        description: 'Add a trigger to start your flow',
        icon: <ThunderboltOutlined />
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [flowName, setFlowName] = useState<string>('Untitled Flow');
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Handler to set the ReactFlow instance
  const onInit = useCallback((instance: ReactFlowInstance) => {
    setReactFlowInstance(instance);
  }, []);

  // Check if there's already a trigger node
  const hasTriggerNode = useCallback(() => {
    return nodes.some(node => node.type === 'trigger');
  }, [nodes]);

  // Enhanced connect handler
  const onConnect = useCallback(
    (params: Connection) => {
      // Find the source and target nodes to verify connection validity
      const sourceNode = nodes.find(node => node.id === params.source);
      const targetNode = nodes.find(node => node.id === params.target);
      
      if (!sourceNode || !targetNode) return;
      
      // Always allow connections from triggers to actions or actions to actions
      const newEdge: Edge = {
        ...params,
        id: `e${params.source}-${params.target}`,
        type: 'default',  // Make sure to use our custom edge type
        animated: true,
        style: { stroke: '#8a63e8', strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15, // Smaller size for better proportions
          height: 15,
          color: '#8a63e8',
        },
      };
      
      setEdges(eds => addEdge(newEdge, eds));
    },
    [nodes, setEdges]
  );
  // Edge selection handler
  const onEdgeClick = useCallback((event: React.MouseEvent, edge: Edge) => {
    event.stopPropagation();
    setSelectedEdge(edge);
    setSelectedNode(null);
  }, []);

  // Node selection handler
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    setSelectedNode(node);
    setSelectedEdge(null);
  }, []);

  // Delete selected edge
  const deleteSelectedEdge = useCallback(() => {
    if (selectedEdge) {
      setEdges(edges => edges.filter(e => e.id !== selectedEdge.id));
      setSelectedEdge(null);
      messageApi.success('Connection deleted');
    }
  }, [selectedEdge, setEdges, messageApi]);

  // Delete selected node
  const deleteSelectedNode = useCallback(() => {
    if (selectedNode) {
      // Delete node
      setNodes(nodes => nodes.filter(n => n.id !== selectedNode.id));
      
      // Delete associated edges
      setEdges(edges => edges.filter(e => 
        e.source !== selectedNode.id && e.target !== selectedNode.id
      ));
      
      setSelectedNode(null);
      messageApi.success('Node deleted');
    }
  }, [selectedNode, setNodes, setEdges, messageApi]);

  // Function to clean up selections when clicking on canvas
  const onPaneClick = useCallback(() => {
    setSelectedEdge(null);
    setSelectedNode(null);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowInstance || !reactFlowWrapper.current) {
        return;
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow/type');
      const itemData = event.dataTransfer.getData('application/reactflow/item');
      
      if (!type || !itemData) {
        return;
      }
      
      // Check if trying to add a trigger when one already exists
      if (type === 'trigger' && hasTriggerNode()) {
        messageApi.error('Only one trigger is allowed per flow');
        return;
      }
      
      const item = JSON.parse(itemData);

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      
      const newNode: CustomNode = {
        id: `${type}_${Date.now()}`,
        type: type as 'trigger' | 'action',
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
      messageApi.success(`${type === 'trigger' ? 'Trigger' : 'Action'} added`);
    },
    [reactFlowInstance, selectedApp, setNodes, hasTriggerNode, messageApi]
  );

  const onDragStart = useCallback((event: React.DragEvent<HTMLDivElement>, item: TriggerEvent | AppAction, type: string) => {
    event.dataTransfer.setData('application/reactflow/type', type);
    event.dataTransfer.setData('application/reactflow/item', JSON.stringify(item));
    event.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleAppSelect = useCallback((app: string) => {
    setSelectedApp(app);
  }, []);

  const addNodeButton = useCallback((type: 'trigger' | 'action') => {
    if (type === 'trigger' && hasTriggerNode()) {
      messageApi.error('Only one trigger is allowed per flow');
      return;
    }
    
    const position = { x: 250, y: nodes.length * 100 + 100 };
    const nodeData: NodeData = type === 'trigger' 
      ? { 
          label: 'New Trigger', 
          description: 'Ethereum: New Transaction',
          icon: <ThunderboltOutlined /> 
        }
      : { 
          label: 'New Action', 
          description: 'Ethereum: Watch Address',
          icon: <AppstoreOutlined /> 
        };
    
    const newNode: CustomNode = {
      id: `${type}_${Date.now()}`,
      type,
      position,
      data: nodeData,
    };
    
    setNodes((nds) => nds.concat(newNode));
    messageApi.success(`${type === 'trigger' ? 'Trigger' : 'Action'} added`);
  }, [nodes, hasTriggerNode, setNodes, messageApi]);

  // Filter items based on search term
  const filterItems = useCallback((items: AppData[]) => {
    if (!searchTerm) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Custom edge with delete button
  const EdgeWithButton = useCallback(
    ({ id, source, target, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: Edge) => {
      // Use a smoother bezier curve for better arrow alignment
      const edgePath = `M${sourceX},${sourceY} C${sourceX},${sourceY + Math.abs(targetY - sourceY) / 2} ${targetX},${sourceY + Math.abs(targetY - sourceY) / 2} ${targetX},${targetY}`;
      const isSelected = selectedEdge?.id === id;
      
      return (
        <>
          <path
            id={id}
            className={`react-flow__edge-path ${isSelected ? 'edge-selected' : ''}`}
            d={edgePath}
            style={{
              ...style,
              stroke: isSelected ? '#ff9800' : '#8a63e8',
              strokeWidth: isSelected ? 3 : 2,
            }}
            markerEnd={markerEnd}
          />
          
          {isSelected && (
            <foreignObject
              width={30}
              height={30}
              x={(sourceX + targetX) / 2 - 15}
              y={(sourceY + targetY) / 2 - 15}
              requiredExtensions="http://www.w3.org/1999/xhtml"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Popconfirm
                  title="Delete this connection?"
                  onConfirm={deleteSelectedEdge}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button 
                    danger 
                    icon={<DeleteOutlined />} 
                    size="small" 
                    shape="circle"
                    className="bg-white shadow-md"
                  />
                </Popconfirm>
              </div>
            </foreignObject>
          )}
        </>
      );
    },
    [selectedEdge, deleteSelectedEdge]
  );

  // Define edge types
  const edgeTypes = {
    default: EdgeWithButton,
  };

  return (
    <div className="h-full bg-white">
      {contextHolder} {/* For Ant Design message API */}
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
              defaultValue="draft"
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              <div className="mb-4">
                <Button 
                  type="primary" 
                  onClick={() => addNodeButton('trigger')} 
                  icon={<ThunderboltOutlined />}
                  className="mr-2"
                  disabled={hasTriggerNode()}
                >
                  Add Trigger
                </Button>
                <Button 
                  onClick={() => addNodeButton('action')}
                  icon={<AppstoreOutlined />}
                >
                  Add Action
                </Button>
              </div>
              
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
                          renderItem={(item) => (
                            <List.Item
                              className="cursor-grab rounded hover:bg-gray-50 p-2"
                              draggable={!hasTriggerNode()}
                              onDragStart={(event) => onDragStart(event, item, 'trigger')}
                              style={{ opacity: hasTriggerNode() ? 0.5 : 1 }}
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
                        dataSource={filterItems(TRIGGERS)}
                        renderItem={(app) => (
                          <List.Item 
                            className="cursor-pointer rounded hover:bg-gray-50 p-2"
                            onClick={() => handleAppSelect(app.id)}
                            style={{ opacity: hasTriggerNode() ? 0.5 : 1 }}
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
                    
                    {hasTriggerNode() && (
                      <div className="text-xs text-orange-500 p-2 bg-orange-50 rounded-md">
                        Only one trigger is allowed per flow
                      </div>
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
                          renderItem={(item) => (
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
                        dataSource={filterItems(ACTIONS)}
                        renderItem={(app) => (
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
                onInit={onInit}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onEdgeClick={onEdgeClick}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                onDragOver={onDragOver}
                onDrop={onDrop}
                fitView
                connectionLineStyle={{ stroke: '#8a63e8', strokeWidth: 2 }}
                connectionLineType="smoothstep"
                defaultEdgeOptions={{
                  type: 'default',
                  animated: true,
                }}
              >
                <Background color="#f0f0f0" gap={16} />
                <Controls />
                
                {/* Status panel */}
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
                
                {/* Selected node options panel */}
                {selectedNode && (
                  <Panel position="top-left">
                    <Card size="small" className="shadow-sm">
                      <div className="space-y-2">
                        <Text strong>Selected: {(selectedNode.data as NodeData).label}</Text>
                        <div className="flex gap-2">
                          <Popconfirm
                            title="Delete this node?"
                            description="This will also remove all connected edges"
                            onConfirm={deleteSelectedNode}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button 
                              danger 
                              icon={<DeleteOutlined />} 
                              size="small"
                            >
                              Delete
                            </Button>
                          </Popconfirm>
                        </div>
                      </div>
                    </Card>
                  </Panel>
                )}
                
                {/* Help panel */}
                <Panel position="bottom-center">
                  <Card size="small" className="shadow-sm">
                    <div className="text-xs text-gray-500">
                      <Text strong>How to connect:</Text> Drag from a node's output (bottom) to another node's input (top).
                      <br />
                      <Text strong>To edit/delete a node:</Text> Click on the node to select it.
                      <br />
                      <Text strong>To delete a connection:</Text> Click on the connection line and use the delete button.
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