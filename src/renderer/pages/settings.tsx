import Button from "../components/button";
import Header from "../components/header";
import PageComponent from "../components/page";
import { Page, useUserStore } from "../stores/user";

export default function Settings() {
	const setPage = useUserStore((state) => state.setPage);

	return (
		<>
			<Header small={true} />
			<PageComponent name="Settings" className="my-auto h-[75vh] w-200">
				
				<Button onClick={() => setPage(Page.HOME)}>Home!</Button>
			</PageComponent>
		</>
	);
}
