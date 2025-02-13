import { createRoot } from "react-dom/client";
import { create } from "zustand";
import Home from "./pages/home";

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(document.body);

const App = () => (
  <>
    <Home />
  </>
);

root.render(<App />);
