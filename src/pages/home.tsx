import Button from "@/components/button";
import bgVideo from "@/assets/openttd-recording.mp4";

export default function Home() {
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
						<Button>New Game</Button>
						<Button>Load Game</Button>
						<Button>Join Game</Button>
						<Button>Host Game</Button>
						<Button>Settings</Button>
						<Button>Mods</Button>
						</div>
						<hr className="border-b border-cyan-950" />
						
						<div className="col-span-2 flex justify-center py-2">
							<Button className="w-52">Quit Game</Button>
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
