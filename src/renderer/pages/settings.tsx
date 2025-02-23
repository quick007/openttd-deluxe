import Button from "../components/button";
import Header from "../components/header";
import PageComponent from "../components/page";
import { Page, useUserStore } from "../stores/user";

export default function Settings() {
	const setPage = useUserStore((state) => state.setPage);

	return (
		<>
			<Header small={true} />
			<PageComponent
				name="Settings"
				className="my-auto h-[75vh] w-200"
				homeButton
			>
				<section className="border-b-2 border-cyan-950 flex justify-center">
					<div className="h-8 divide-x-2 divide-cyan-950 border-x-2 border-cyan-950">
						<button
							className="px-2 py-1.5  inset-shadow-sm inset-shadow-black/30 cursor-pointer z-10"
							onClick={() => setPage(Page.HOME)}
						>
							{"🏠"} Global Settings
						</button>
						<button
							className="px-2 py-1.5  inset-shadow-xs inset-shadow-white/5 cursor-pointer z-10"
							onClick={() => setPage(Page.HOME)}
						>
							{"🏠"} Game Config
						</button>
						<button
							className="px-2 py-1.5  inset-shadow-xs inset-shadow-white/5 cursor-pointer z-10"
							onClick={() => setPage(Page.HOME)}
						>
							{"🏠"} Home
						</button>
					</div>
				</section>
				<section></section>
			</PageComponent>
		</>
	);
}
