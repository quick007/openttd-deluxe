import { cn } from "@/renderer/lib/cn";

export default function Button({
	children,
	className,
	btnType = "primary",
	selected,
	...props
}: {
	btnType?: "primary" | "secondary";
	selected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	// window.electronAPI.setTitle("among");

	return (
		<button
			className={cn(
				className,
				"focus:animate-press flex flex-col items-center justify-center",
				!selected
					? btnType === "primary"
						? "bg-amber-500 py-1 text-black inset-shadow-sm ring ring-amber-600 inset-shadow-amber-400/50"
						: "bg-cyan-1000 inset-shadow-xs inset-shadow-white/5"
					: "inset-shadow-sm inset-shadow-black/30",
			)}
			{...props}
		>
			{children}
		</button>
	);
}
