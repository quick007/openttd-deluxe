import { cn } from "@/renderer/lib/cn";

export default function Button({
	children,
	className,
	btnType = "primary",
	...props
}: {
	btnType?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	// window.electronAPI.setTitle("among");
	
	return (
		<button
			className={cn(
				className,
				"focus:animate-press flex flex-col items-center py-1",
				btnType === "primary"
					? "bg-amber-500 py-1 text-black inset-shadow-sm ring ring-amber-600 inset-shadow-amber-400/50"
					: "z-10 cursor-pointer inset-shadow-xs inset-shadow-white/5",
			)}
			{...props}
		>
			{children}
		</button>
	);
}
