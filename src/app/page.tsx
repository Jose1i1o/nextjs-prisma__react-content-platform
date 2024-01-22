'use client';

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";
import { Sidebar } from "./components/Sidebar";
import { theme } from "@/theme/theme";
import renderComponent from "./utils/renderComponent";
import { useFetchModules } from "./hooks/useFetchModules";
import { useCategory } from "./hooks/useCategory";

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
	const [showSidebar, setShowSidebar] = useState(false);
  const { isLoading, currentModule } = useFetchModules();

	useEffect(() => {
	}, [currentModule]);
	
  const category = useCategory(); 

	return (
		<ClientOnly>
				<Container>
						<div style={{ backgroundColor: theme.colors.black }} className="flex flex-col md:flex-row gap-4">
								{!isLoading && <Sidebar show={showSidebar} setter={setShowSidebar} />}
								<div className="flex flex-col gap-4 w-full">
										{isLoading ? <div>Loading...</div> : renderComponent(category, currentModule)}
								</div>
						</div>
				</Container>
		</ClientOnly>
);
};

export default Home;