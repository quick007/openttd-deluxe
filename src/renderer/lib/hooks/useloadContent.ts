import { useSettingsStore } from "@/renderer/stores/settings";
import { useEffect, useState } from "react";

export default function useLoadContent() {
	const [loading, setLoading] = useState(true);
	const [fetched, setFetched] = useState(false);

	const fetchSettings = useSettingsStore((state) => state.fetch);

	useEffect(() => {
		(async () => {
			if (!fetched) {
				console.log("RAN FETCHER!!!!");
				setFetched(true);
				await Promise.all([fetchSettings()]);
				setLoading(false);
			}
		})();
	}, []);

	return { loading };
}
