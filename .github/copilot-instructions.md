<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Chatbot Flow Builder Project Instructions

This is a React JavaScript project using Vite as the build tool. The project creates a visual chatbot flow builder application.

## Technology Stack
- React 18 with JavaScript (ES6+)
- Vite for build tooling
- Bootstrap for styling framework
- Material-UI (MUI) for advanced components
- React Flow (@xyflow/react) for drag-and-drop flow diagrams
- Lucide React for icons

## Architecture Guidelines
- Use functional components with React hooks
- Implement proper prop validation with PropTypes if needed
- Follow component composition patterns for extensibility
- Use custom hooks for reusable logic
- Implement proper state management for flow data
- Follow React Flow best practices for node and edge management

## Component Structure
- Keep components small and focused on single responsibilities
- Use proper prop destructuring and default values
- Implement proper error boundaries
- Use memo() for performance optimization where needed

## Styling Guidelines
- Use Bootstrap utility classes for layout and spacing
- Use MUI components for advanced UI elements
- Implement responsive design with Bootstrap grid system
- Follow consistent spacing and color schemes
- Combine Bootstrap and MUI thoughtfully for best UX

## Code Quality
- Follow ESLint and Prettier configurations
- Write meaningful variable and function names
- Add proper JSDoc comments for complex functions
- Implement proper error handling
- Write unit tests for critical functionality
