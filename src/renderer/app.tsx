import bgVideo from "@assets/openttd-recording.mp4";
import { createRoot } from "react-dom/client";
import Button from "./components/button";
import useLoadContent from "./lib/hooks/useloadContent";
import Home from "./pages/home";
import Settings from "./pages/settings";
import { Page, useUserStore } from "./stores/user";
import Game from "./pages/game";

const root = createRoot(document.body);

const App = () => {
	const { loading } = useLoadContent();
	const page = useUserStore((state) => state.page);
	const setPage = useUserStore((state) => state.setPage);

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

		case Page.IN_GAME: {
			return <Game />;
		}

		default: {
			content = (
				<>
					<h1>404</h1>

					<Button onClick={() => setPage(Page.HOME)}>Home</Button>
				</>
			);

			break;
		}
	}

	return (
		<>
			<div className="relative flex h-screen flex-col items-center text-gray-200">
				{content}
				<div className="absolute inset-0 -z-10">
					<video
						src={bgVideo}
						loop
						// autoPlay
						controls={false}
						className="h-full w-full object-cover select-none"
					></video>
				</div>
				{/* <img src={imgUrl} alt="" className="size-10" /> */}
			</div>
		</>
	);
};

root.render(<App />);
