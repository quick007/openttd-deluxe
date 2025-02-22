import Button from "@components/button";
import cogWheelIcon from "@assets/pixelart/cogwheel/main.png";
import { Page, useUserStore } from "../stores/user";
import Header from "../components/header";
import PageComponent from "../components/page";

export default function Home() {
	const setPage = useUserStore((state) => state.setPage);

	return (
		<>
			<Header />
			<PageComponent name="OpenTTD Deluxe 0.0.0-beta0" className="my-auto w-96">
				<div className="grid grid-cols-2 gap-4 p-2">
					<Button className="col-span-2 text-base">
						<span>Continue Game</span>
						<span className="text-xs font-normal">Server (id: 1234)</span>
					</Button>
					<Button onClick={() => setPage(Page.NEW_GAME)}>New Game</Button>
					<Button onClick={() => setPage(Page.LOAD_GAME)}>Load Game</Button>
					<Button onClick={() => setPage(Page.MULTIPLAYER)}>Mutliplayer</Button>
					<Button onClick={() => setPage(Page.MODS)}>Mods</Button>
				</div>
				<hr className="border-b border-cyan-950" />

				<div className="col-span-2 flex justify-center  py-2 relative">
					<Button className="w-52" onClick={window.close}>
						Quit Game
					</Button>
					<Button
						className="absolute right-2 size-7 flex items-center justify-center !py-0"
						onClick={() => setPage(Page.SETTINGS)}
					>
						<img src={cogWheelIcon} className="size-4" />
					</Button>
				</div>
			</PageComponent>
			<p className="abolute inset-x-0 text-center bottom-4 text-sm font-medium text-gray-200"></p>
		</>
	);
}
