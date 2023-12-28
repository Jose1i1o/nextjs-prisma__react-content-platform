"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import getListings from "./actions/getListings";
import { usePathname, useSearchParams } from "next/navigation";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components";

const EmptyState = dynamic(
	() => import("./components/Pages/EmptyState/EmptyState")
);

const Bundlers = dynamic(() => import("./components/Pages/Bundlers/Bundlers"));

const Intro = dynamic(() => import("./components/Pages/Intro/Intro"));

const UseState = dynamic(() => import("./components/Pages/UseState/UseState"));

const PropDrilling = dynamic(
	() => import("./components/Pages/PropDrilling/PropDrilling")
);

export default function Home() {
	// const listings = await getListings();

	const [filteredCourseProgress, setFilteredCourseProgress] = useState({});

	const params = useSearchParams();
	const category = params?.get("category");

	let componentToRender;

	const completionTypes = {
		completed: "completed",
		inProgress: "inProgress",
		notCompleted: "notCompleted",
	};
	
	const [courseProgress, setCourseProgress] = useState({
		module0: {
			moduleDetails: {
				module: "Module 0",
				title: "Bundlers",
				completionStatus: completionTypes.inProgress,
				progress: 100,
			},
			introductionVideo: {
				title: "Introduction Video",
				completionStatus: completionTypes.completed,
				points: 5
			},
			understandingJSBundlers: {
				title: "JavaScript Bundlers",
				completionStatus: completionTypes.completed,
				points: 10
			},
			webpack: {
				title: "Webpack",
				completionStatus: completionTypes.completed,
				points: 10
			},
			vite: {
				title: "Vite",
				completionStatus: completionTypes.inProgress,
				points: 10
			},
			otherBundlers: {
				title: "Other Bundlers",
				completionStatus: "notCompleted",
				points: 10
			},
			otherFrameworks: {
				title: "Other Frameworks",
				completionStatus: completionTypes.notCompleted,
				points: 10
			},
			npm: {
				title: "NPM and others",
				completionStatus: completionTypes.notCompleted,
				points: 10
			},
		},
		module1: {
			moduleDetails: {
				module: "Module 1",
				completionStatus: completionTypes.notCompleted,
				title: "Introduction to React",
				progress: 50,
			},
			reactFilm: {
				title: "React. The Film",
				completionStatus: completionTypes.notCompleted,
				points: 10
			},
			reactEvolution: {
				title: "The Evolution of React.js",
				completionStatus: completionTypes.notCompleted,
				points: 5
			},
			reactPlayground: {
				title: "Playground: Testing your React skills",
				completionStatus: completionTypes.notCompleted,
				points: 8
			},
			introTestExercises: {
				title: "Introduction Test Exercises",
				completionStatus: completionTypes.notCompleted,
				points: 12
			},
	}});

	switch (category) {
		case "Bundlers":
			componentToRender = <Bundlers courseProgress={courseProgress}/>;
			break;
		case "Intro":
			componentToRender = <Intro courseProgress={courseProgress}/>;
			break;
		case "useState":
			componentToRender = <EmptyState showReset />;
			break;
		case "prop drilling":
			componentToRender = <EmptyState showReset />;
			break;
		case "prevState":
			componentToRender = <EmptyState showReset />;
			break;
		case "useEffect":
			componentToRender = <EmptyState showReset />;
			break;
		case "conditionals":
			componentToRender = <EmptyState showReset />;
			break;
		case "Routing":
			componentToRender = <EmptyState showReset />;
			break;
		case "useContext":
			componentToRender = <EmptyState showReset />;
			break;
		case "Forms":
			componentToRender = <EmptyState showReset />;
			break;
		case "useReducer":
			componentToRender = <EmptyState showReset />;
			break;
		case "Async/Await":
			componentToRender = <EmptyState showReset />;
			break;
		case "Dinamic Routing":
			componentToRender = <EmptyState showReset />;
			break;
		case "Styled Components":
			componentToRender = <EmptyState showReset />;
			break;
		case "Private Routes":
			componentToRender = <EmptyState showReset />;
			break;
		case "Memoization":
			componentToRender = <EmptyState showReset />;
			break;
		case "Optimizations":
			componentToRender = <EmptyState showReset />;
			break;
		default:
			componentToRender = <EmptyState showReset />;
	}

	useEffect(() => {
		// Filter the courseProgress based on the selected category
		switch (category) {
			case "Bundlers":
				setFilteredCourseProgress({
					moduleDetails: courseProgress.module0.moduleDetails,
					introductionVideo: courseProgress.module0.introductionVideo,
					understandingJSBundlers: courseProgress.module0.understandingJSBundlers,
					webpack: courseProgress.module0.webpack,
					vite: courseProgress.module0.vite,
					otherBundlers: courseProgress.module0.otherBundlers,
					otherFrameworks: courseProgress.module0.otherFrameworks,
					npm: courseProgress.module0.npm,
				});
				break;
			case "Intro":
				setFilteredCourseProgress({
					moduleDetails: courseProgress.module1.moduleDetails,
					reactFilm: courseProgress.module1.reactFilm,
					reactEvolution: courseProgress.module1.reactEvolution,
					reactPlayground: courseProgress.module1.reactPlayground,
					introTestExercises: courseProgress.module1.introTestExercises,
				});
				break;
			// Add other cases for each category
			default:
				setFilteredCourseProgress({});
		}
	}, [category, courseProgress]);

	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<ClientOnly>
			<Container>
				<div className="bg-neutral-950 flex flex-col md:flex-row gap-4">
				<Sidebar show={showSidebar} setter={setShowSidebar} courseProgress={filteredCourseProgress} />
					<div className="flex flex-col gap-4 w-full">
						{componentToRender}
					</div>
				</div>
			</Container>
		</ClientOnly>
	);
}

{
	/* {listings.map((listing: any) => (
		<div
			key={listing.id}
			className="
				p-4
				rounded-md
				bg-white
				shadow-sm
			"
		>
			<h2>{listing.title}</h2>
			<p>{listing.description}</p>
			<img src={listing.image} alt={listing.title} />
			<code className="text-sm">{listing.code}</code>
		</div>
	))} */
}
