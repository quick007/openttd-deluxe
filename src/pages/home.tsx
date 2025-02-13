import imgUrl from "../assets/image.jpg";
import bgVideo from "../assets/openttd-recording.mp4";

export default function Home() {
	return (
		<>
			<div className="flex items-center flex-col relative h-screen">
				<h1 className="text-7xl text-amber-500 mt-32 select-none">
					OpenTTD Deluxe
				</h1>
				<section className="mt-64 p-4 bg-amber-200 border border-black grid grid-cols-2 text-md w-96 gap-2">
					<button className="border boarder-amber-400 bg-amber-500">
						New Game
					</button>
					<button className="border boarder-amber-400 bg-amber-500">
						Load Game
					</button>
					<div className="col-span-2 flex justify-center mt-4">
						<button className="border boarder-amber-400 bg-amber-500 w-45">
							Quit Game
						</button>
					</div>
				</section>
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
