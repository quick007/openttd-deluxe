import { useSettingsStore } from "@/renderer/stores/settings";
import { useEffect, useState } from "react";

export default function useLoadContent() {
	const [loading, setLoading] = useState(true);

	const fetchSettings = useSettingsStore((state) => state.fetch);

	useEffect(() => {
		(async () => {
			await Promise.all([fetchSettings()]);
			setLoading(false);
		})();
	}, []);

	return { loading };
}
