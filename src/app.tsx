import { createRoot } from "react-dom/client";
import { create } from "zustand";

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(document.body);

const App = () => (
  <>
    <div>
      <h1>💖 Hello from React!!!</h1>
      <p>Welcome to your Electron application.</p>
    </div>
  </>
);

root.render(<App />);
