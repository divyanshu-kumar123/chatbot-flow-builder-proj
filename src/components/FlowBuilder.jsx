import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { NodePanel } from './NodePanel';
import { MessageNode } from './nodes/MessageNode';
import { SettingsPanel } from './SettingsPanel';

// Define custom node types -- For future extensibility
// This allows us to easily add more node types later -( we have only one (MessageNode) for now)
const nodeTypes = {
  messageNode: MessageNode,
};

// The initial nodes which will be displayed in the flow
const initialNodes = [
  {
    id: '1',
    type: 'messageNode',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Start',
      text: 'Welcome! How can I help you today?' 
    },
  },
];

// The initial edges which will connect the nodes in the flow -- (no edges initially)
const initialEdges = [];

// The main FlowBuilder component which renders the flow builder interface
export const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  // Function to handle connecting nodes -- (called when a user connects two nodes)
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Function to handle node selection -- (called when a node is clicked)
  const onNodeClick = useCallback((_event, node) => {
    setSelectedNode(node);
  }, []);

  // Function to handle pane clicks -- (deselects any selected node when clicking on the background)
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Function to add a new node to the flow -- (called when the user clicks to add a new node)
  const addNewNode = useCallback((_type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: 'messageNode',
      position: { x: Math.random() * 300 + 100, y: Math.random() * 200 + 100 },
      data: { 
        label: `Message ${nodes.length + 1}`,
        text: 'Enter your message here...' 
      },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes.length, setNodes]);

  // Function to update the data of a selected node -- (called from the settings panel)
  const updateNodeData = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
  }, [setNodes]);

  return (
    <Container fluid className="h-100 p-0">
      <Row className="h-100 g-0">
        <Col md={2} className="bg-white border-end">
          <NodePanel onAddNode={addNewNode} />
        </Col>
        <Col md={8} className="position-relative">
          <div style={{ height: '100%' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              nodeTypes={nodeTypes}
              fitView
              className="bg-light"
            >
              <Controls />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
        </Col>
        <Col md={2} className="bg-white border-start">
          <SettingsPanel 
            selectedNode={selectedNode}
            onUpdateNode={updateNodeData}
          />
        </Col>
      </Row>
    </Container>
  );
};
