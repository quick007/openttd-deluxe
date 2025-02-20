import { cn } from "@/renderer/lib/cn";

export default function Button({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	window.electronAPI.setTitle("among");
	return (
		<button
			className={cn(
				className,
				"ring ring-amber-400 bg-amber-500 py-1 flex flex-col items-center inset-shadow-sm inset-shadow-amber-400/50",
				"cursor-pointer focus:animate-press ring-amber-600"
			)}
			{...props}
		>
			{children}
		</button>
	);
}
