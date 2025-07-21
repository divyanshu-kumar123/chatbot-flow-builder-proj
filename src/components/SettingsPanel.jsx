import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Settings } from 'lucide-react';

export const SettingsPanel = ({ selectedNode, onUpdateNode }) => {
  const [nodeLabel, setNodeLabel] = useState('');
  const [nodeText, setNodeText] = useState('');

  //update the form fields when a node is selected
  useEffect(() => {
    if (selectedNode) {
      setNodeLabel(selectedNode.data.label || '');
      setNodeText(selectedNode.data.text || '');
    } else {
      setNodeLabel('');
      setNodeText('');
    }
  }, [selectedNode]);

  // Function to handle saving changes to the node
  const handleSave = () => {
    if (selectedNode) {
      onUpdateNode(selectedNode.id, {
        label: nodeLabel,
        text: nodeText,
      });
    }
  };

  if (!selectedNode) {
    return (
      <div className="p-3 h-100">
        <div className="d-flex align-items-center gap-2 mb-3">
          <Settings size={16} className="text-muted" />
          <h6 className="mb-0 text-muted">Settings</h6>
        </div>
        <div className="text-center text-muted mt-5">
          <p className="small">Select a node to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 h-100">
      <div className="d-flex align-items-center gap-2 mb-3">
        <Settings size={16} className="text-primary" />
        <h6 className="mb-0">Settings</h6>
      </div>

      <Card>
        <Card.Header>
          <small className="text-muted">Message Node</small>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Label</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={nodeLabel}
                onChange={(e) => setNodeLabel(e.target.value)}
                placeholder="Enter node label"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Message Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                size="sm"
                value={nodeText}
                onChange={(e) => setNodeText(e.target.value)}
                placeholder="Enter message text"
              />
            </Form.Group>

            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleSave}
              className="w-100"
            >
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
