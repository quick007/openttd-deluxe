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
				"bg-cyan-1000 ring-2 ring-cyan-950 shadow text-sm font-bold z-10 duration-1000 "
			)}
			style={{ viewTransitionName: "main-border-box-page-component" }}
		>
			<div className="border-b-2 border-cyan-950 col-span-2 text-center text-gray-100 text-xs flex relative isolate">
				{homeButton && (
					<Button
						btnType="secondary"
						className="px-2 py-1 border-cyan-950 border-r-2 "
						onClick={() => setPage(Page.HOME)}
					>
						{"🏠"} Home
					</Button>
				)}
				<p className="inset-shadow-sm inset-shadow-black/30 text-center grow h-7">
					{/* This centers settings in the absolute center of the container rather than the center relative to the  */}
					<span className="absolute inset-x-0 -z-10 pt-1.5">{name}</span>
				</p>
			</div>
			{children}
		</section>
	);
}
