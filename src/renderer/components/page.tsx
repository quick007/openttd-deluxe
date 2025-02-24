import { cn } from "../lib/cn";
import { Page, useUserStore } from "../stores/user";
import Button from "./button";

export default function PageComponent({
	name,
	children,
	className,
	homeButton,
}: {
	name: string;
	children: React.ReactNode;
	className: string;
	homeButton?: boolean;
}) {
	const setPage = useUserStore((state) => state.setPage);

	return (
		<section
			className={cn(
				className,
				"bg-cyan-1000 z-10 text-sm font-bold ring-2 shadow ring-cyan-950 duration-1000",
			)}
			style={{ viewTransitionName: "main-border-box-page-component" }}
		>
			<div className="relative isolate col-span-2 flex border-b-2 border-cyan-950 text-center text-xs text-gray-100">
				{homeButton && (
					<Button
						btnType="secondary"
						className="border-r-2 border-cyan-950 px-2 py-1"
						onClick={() => setPage(Page.HOME)}
					>
						{"🏠"} Home
					</Button>
				)}
				<p className="h-7 grow text-center inset-shadow-sm inset-shadow-black/30">
					{/* This centers settings in the absolute center of the container rather than the center relative to the  */}
					<span className="absolute inset-x-0 -z-10 pt-1.5">{name}</span>
				</p>
			</div>
			{children}
		</section>
	);
}
