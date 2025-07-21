import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { MessageCircle, Plus } from 'lucide-react';

// The NodePanel component -- allows users to add new nodes to the flow
export const NodePanel = ({ onAddNode }) => {
  return (
    <div className="p-3 h-100">
      <h6 className="mb-3 text-muted">Nodes</h6>
      
      <Card className="mb-2">
        <Card.Body className="p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <MessageCircle size={16} className="text-primary" />
              <span className="small">Message</span>
            </div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onAddNode('message')}
              className="p-1"
            >
              <Plus size={12} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <div className="mt-4">
        <small className="text-muted">
          Drag and drop nodes onto the canvas to build your chatbot flow.
        </small>
      </div>
    </div>
  );
};
