
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Fix: Explicitly define the ErrorBoundary component with typed props and state.
// Making children optional avoids 'missing required prop' errors in some JSX environments.
class ErrorBoundary extends Component<{ children?: ReactNode }, { hasError: boolean }> {
  // Fix: Explicitly declare the state property on the class to resolve "Property 'state' does not exist" errors.
  public state: { hasError: boolean } = { hasError: false };

  constructor(props: { children?: ReactNode }) {
    super(props);
    // Initial state is also set in the property initializer above.
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical Runtime Error:", error, errorInfo);
  }

  render() {
    // Fix: Access state through this.state, which is now correctly recognized by the TypeScript compiler.
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-10">
          <div className="text-red-500 text-center">
            <h1 className="text-6xl font-black mb-4 underline">SYSTEM ERROR</h1>
            <p className="text-xl">A critical error occurred. Please refresh the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
            >
              REBOOT NOW
            </button>
          </div>
        </div>
      );
    }
    // Fix: Access props through this.props, which is now correctly recognized.
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
