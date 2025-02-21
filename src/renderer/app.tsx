import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import useLoadContent from "./lib/hooks/useloadContent";
import { Page, useUserStore } from "./stores/user";
import bgVideo from "@assets/openttd-recording.mp4";
import Settings from "./pages/settings";

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
			<div className="flex items-center flex-col relative h-screen">
				{content}
				<div className="absolute -z-10 inset-0">
					<video
						src={bgVideo}
						loop
						// autoPlay
						controls={false}
						className="object-cover h-full w-full select-none"
					></video>
				</div>
				{/* <img src={imgUrl} alt="" className="size-10" /> */}
			</div>
		</>
	);
};

root.render(<App />);
