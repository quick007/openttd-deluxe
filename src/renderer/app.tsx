import { createRoot } from "react-dom/client";
import { create } from "zustand";
import Home from "./pages/home";
import useLoadContent from "./lib/hooks/useloadContent";
import { useEffect, useState } from "react";
import { useSettingsStore } from "./stores/settings";

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(document.body);

const App = () => {
	const { loading } = useLoadContent();

  if (loading) {
    return (
      "Loading..."
    )
  }

	return (
		<>
			<Home />
		</>
	);
};

root.render(<App />);
