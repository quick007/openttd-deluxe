import Button from "@components/button";
import bgVideo from "@assets/openttd-recording.mp4";
import cogWheelIcon from "@assets/pixelart/cogwheel/main.png";
import { Page, useUserState } from "../stores/user";

export default function Home() {
	const setPage = useUserState(state => state.setPage)

	return (
		<>
			<div className="flex items-center flex-col relative h-screen">
				<h1 className="text-8xl bg-linear-to-b from-amber-500 to-amber-600 bg-clip-text text-transparent mt-32 select-none absolute font-jersey z-10">
					OpenTTD Deluxe
				</h1>
				<span className="text-8xl text-amber-950 mt-33 ml-1 select-none absolute font-jersey">
					OpenTTD Deluxe
				</span>
				<section className="my-auto bg-[#012937] ring-2 ring-cyan-950 shadow  w-96 gap-6 text-sm font-bold">
					<div className="border-b-2 border-cyan-950 py-1 col-span-2 text-center text-gray-100 text-xs inset-shadow-sm inset-shadow-black/30 select-none">
						OpenTTD Deluxe 0.0.0-beta0
					</div>
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
							<Button className="w-52" onClick={window.close}>Quit Game</Button>
							<Button className="absolute right-2 size-7 flex items-center justify-center !py-0">
								<img src={cogWheelIcon} className="size-4" />
							</Button>
						</div>
					
				</section>
				<p className="abolute inset-x-0 text-center bottom-4 text-sm font-medium text-gray-200"></p>
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
}
