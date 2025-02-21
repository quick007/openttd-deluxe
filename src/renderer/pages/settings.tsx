import Button from "../components/button";
import Header from "../components/header";
import { Page, useUserStore } from "../stores/user";

export default function Settings() {
	const setPage = useUserStore((state) => state.setPage);

	return (
		<>
			<Header small={true} />
			<div className="z-10">
				settings page!!!!111!!!!
				<Button onClick={() => setPage(Page.HOME)}>Home!</Button>
			</div>
		</>
	);
}
