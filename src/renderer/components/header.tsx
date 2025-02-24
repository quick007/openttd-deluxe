import { cn } from "../lib/cn";

export default function Header({ small }: { small?: boolean }) {
	return (
		<div
			className={cn(
				small ? "mt-4" : "mt-32",
				"select-none font-jersey absolute"
			)}
			style={{ viewTransitionName: "header-menu" }}
		>
			<header className="-z-10 grid *:[grid-row-start:1] *:[grid-column-start:1]">
				<h1
					className={cn(
						small ? "text-3xl" : "text-6xl xl:text-8xl",
						"bg-linear-to-b from-amber-500 to-amber-600 bg-clip-text text-transparent z-10"
					)}
				>
					OpenTTD Deluxe
				</h1>
				<span
					className={cn(
						small
							? "text-3xl translate-x-0.5 translate-y-0.5"
							: "text-6xl xl:text-8xl translate-x-1 translate-y-1",
						"text-amber-950"
					)}
				>
					OpenTTD Deluxe
				</span>
			</header>
		</div>
	);
}
