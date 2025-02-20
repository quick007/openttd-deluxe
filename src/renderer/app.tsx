import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import useLoadContent from "./lib/hooks/useloadContent";
import { Page, useUserStore } from "./stores/user";
import Settings from "./pages/settings";

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(document.body);

const App = () => {
	const { loading } = useLoadContent();
	const page = useUserStore((state) => state.page);

	if (loading) {
		return "Loading...";
	}

	let content: React.ReactNode;

	// maybe I spring for a proper router at some point
	switch (page) {
		case Page.HOME: {
			content = <Home />;
			break;
		}

		case Page.SETTINGS: {
			content = <Settings />;
			break;
		}

		default: {
			content = <h1>404</h1>;
			break;
		}
	}

	return (
		<>
			{content}
		</>
	);
};

root.render(<App />);
