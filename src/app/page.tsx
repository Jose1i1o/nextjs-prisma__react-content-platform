'use client';

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";
import { Sidebar } from "./components/Sidebar";

const EmptyState = dynamic(
	() => import("./components/Pages/EmptyState/EmptyState")
);

const Bundlers = dynamic(() => import("./components/Pages/Bundlers/Bundlers"));

const Intro = dynamic(() => import("./components/Pages/Intro/Intro"));

// const UseState = dynamic(() => import("./components/Pages/UseState/UseState"));

// const PropDrilling = dynamic(
// 	() => import("./components/Pages/PropDrilling/PropDrilling")
// );

const Home = () => {
	const [moduleInfo, setModuleInfo] = useState();

	const [isLoading, setIsLoading] = useState(false);
	const params = useSearchParams();
	
	const category = params?.get("category");
	
	const [showSidebar, setShowSidebar] = useState(false);

	const fetchModules = useCallback(async () => {
		setIsLoading(true);
		try {
				const response = await fetch(`/api/modules?category=${category}`);
				const data = await response.json();
				
				setModuleInfo(data);
		} catch (error) {
				console.error("Error fetching modules:", error);
		}
		setIsLoading(false);
		}, [category]);

		useEffect(() => {
				if (category) {
						fetchModules();
				}
		}, [fetchModules, category]);

const renderComponent = () => {
	switch (category) {
			case "Bundlers":
				return moduleInfo ? <Bundlers moduleInfo={moduleInfo} /> : null;
				break;
			case "Intro":
				return moduleInfo ? <Intro moduleInfo={moduleInfo} /> : null;
				break;
			case "useState":
				return <EmptyState showReset />;
				break;
			case "prop drilling":
				return <EmptyState showReset />;
				break;
			case "prevState":
				return <EmptyState showReset />;
				break;
			case "useEffect":
				return <EmptyState showReset />;
				break;
			case "conditionals":
				return <EmptyState showReset />;
				break;
			case "Routing":
				return <EmptyState showReset />;
				break;
			case "useContext":
				return <EmptyState showReset />;
				break;
			case "Forms":
				return <EmptyState showReset />;
				break;
			case "useReducer":
				return <EmptyState showReset />;
				break;
			case "Async/Await":
				return <EmptyState showReset />;
				break;
			case "Dinamic Routing":
				return <EmptyState showReset />;
				break;
			case "Styled Components":
				return <EmptyState showReset />;
				break;
			case "Private Routes":
				return <EmptyState showReset />;
				break;
			case "Memoization":
				return <EmptyState showReset />;
				break;
			case "Optimizations":
				return <EmptyState showReset />;
				break;
			default:
				return <EmptyState showReset />;
				break;
				}
};

	return (
		<ClientOnly>
				<Container>
						<div className="bg-neutral-950 flex flex-col md:flex-row gap-4">
								{moduleInfo && <Sidebar show={showSidebar} setter={setShowSidebar} moduleInfo={moduleInfo} />}
								<div className="flex flex-col gap-4 w-full">
										{isLoading ? <div>Loading...</div> : renderComponent()}
								</div>
						</div>
				</Container>
		</ClientOnly>
);
};

export default Home;