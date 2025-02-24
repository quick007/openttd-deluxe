import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import Button from "../components/button";
import Header from "../components/header";
import PageComponent from "../components/page";

export default function Settings() {
	const pages: { name: string; page: React.ReactElement }[] = [
		{
			name: "⚙️ Global Settings",
			page: <>global</>,
		},
		{
			name: "🎯 Game Config",
			page: <>config</>,
		},
	];

	return (
		<>
			<Header small={true} />
			<PageComponent
				name="Settings"
				className="my-auto h-[75vh] w-200"
				homeButton
			>
				<TabGroup>
					<div className="flex justify-center border-b-2 border-cyan-950">
						<TabList className="z-10 flex h-8 divide-x-2 divide-cyan-950 border-x-2 border-cyan-950">
							{pages.map(({ name }) => (
								<Tab as={Fragment}>
									{({ selected }) => (
										<Button
											btnType="secondary"
											className="px-3 focus:outline-none"
											selected={selected}
										>
											{name}
										</Button>
									)}
								</Tab>
							))}
						</TabList>
					</div>
					<TabPanels>
						{pages.map(({ page }) => (
							<TabPanel>{page}</TabPanel>
						))}
					</TabPanels>
				</TabGroup>
				<section></section>
			</PageComponent>
		</>
	);
}
