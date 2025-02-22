import { cn } from "../lib/cn";

export default function PageComponent({
	name,
	children,
	className,
}: {
	name: string;
	children: React.ReactNode;
	className: string;
}) {
	return (
		<section
			className={cn(
				className,
				"bg-cyan-1000 ring-2 ring-cyan-950 shadow text-sm font-bold z-10 duration-1000"
			)}
			style={{ viewTransitionName: "main-border-box-page-component" }}
		>
			<div className="border-b-2 border-cyan-950 py-1 col-span-2 text-center text-gray-100 text-xs inset-shadow-sm inset-shadow-black/30">
				{name}
			</div>
			{children}
		</section>
	);
}
