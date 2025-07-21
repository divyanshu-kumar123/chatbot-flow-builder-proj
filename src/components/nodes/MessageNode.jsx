import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card } from 'react-bootstrap';
import { MessageCircle } from 'lucide-react';

//The message node component for displaying messages in a flow
export const MessageNode = ({ data, selected }) => {
  return (
    <div className="message-node">
      <Handle type="target" position={Position.Top} />
      <Card 
        className={`shadow-sm ${selected ? 'border-primary' : ''}`}
        style={{ minWidth: '200px', maxWidth: '300px' }}
      >
        <Card.Header className="d-flex align-items-center gap-2 py-2">
          <MessageCircle size={16} className="text-primary" />
          <small className="fw-bold text-muted">{data.label}</small>
        </Card.Header>
        <Card.Body className="py-2">
          <p className="mb-0 small">{data.text}</p>
        </Card.Body>
      </Card>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
