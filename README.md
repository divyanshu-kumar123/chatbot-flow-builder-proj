# BiteSpeed Chatbot Flow Builder

A visual chatbot flow builder application built with React, JavaScript, and modern UI components. This application allows users to create and manage chatbot conversation flows through an intuitive drag-and-drop interface.

## Features

- **Visual Flow Builder**: Drag-and-drop interface for creating chatbot flows
- **Message Nodes**: Create and configure message nodes with custom text
- **Real-time Editing**: Edit node properties in real-time with a settings panel
- **Flow Connections**: Connect nodes to define conversation flow
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Built with Bootstrap and Material-UI components

## Technology Stack

- **React 18** with JavaScript (ES6+) for modern development
- **Vite** for fast build tooling and development
- **React Flow** (@xyflow/react) for drag-and-drop flow diagrams
- **Bootstrap** for styling framework and responsive design
- **Material-UI (MUI)** for advanced UI components
- **Lucide React** for beautiful icons
- **React Bootstrap** for Bootstrap components in React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/divyanshu-kumar123/chatbot-flow-builder-proj.git
cd chatbot-flow-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## Project Structure

```
src/
├── components/
│   ├── FlowBuilder.jsx      # Main flow builder component
│   ├── NodePanel.jsx        # Panel for adding new nodes
│   ├── SettingsPanel.jsx    # Panel for editing node properties
│   └── nodes/
│       └── MessageNode.jsx  # Custom message node component
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css               # Global styles
```

## Usage

1. **Adding Nodes**: Use the left panel to add new message nodes to your flow
2. **Editing Nodes**: Click on any node to select it and edit its properties in the right panel
3. **Connecting Nodes**: Drag from the bottom handle of one node to the top handle of another to create connections
4. **Moving Nodes**: Click and drag nodes to reposition them on the canvas

## Architecture

The application follows React best practices with:

- **Component Composition**: Small, focused components with single responsibilities
- **Custom Hooks**: Reusable logic extraction using React hooks
- **JavaScript ES6+**: Modern JavaScript features and syntax
- **State Management**: Proper state management using React Flow's built-in state hooks
- **Performance Optimization**: Memoization and callbacks for optimal rendering

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
