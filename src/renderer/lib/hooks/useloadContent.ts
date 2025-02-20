import { useSettingsStore } from "@/renderer/stores/settings";
import { useEffect, useState } from "react";

export default function useLoadContent() {
	const [loading, setLoading] = useState(true);
	const [fetching, setFetching] = useState(false);

	const fetchSettings = useSettingsStore((state) => state.fetch);

	useEffect(() => {
		(async () => {
			if (!fetching) {
				console.log("uh oh")
				setFetching(true);
				await Promise.all([fetchSettings()]);
				setLoading(false);
			}
		})();
	}, []);

	return { loading };
}
