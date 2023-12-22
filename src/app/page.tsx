"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import getListings from "./actions/getListings";
import { usePathname, useSearchParams } from "next/navigation";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";
import { Sidebar } from "./components/Sidebar";

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

	const completed = "completed";
	const inProgress = "in progress";
	const notCompleted = "not completed";
	
	const [courseProgress, setCourseProgress] = useState({
		introductionVideo: {
			title: "Introduction Video",
			completionStatus: completed,
			points: 5
		},
		understandingJSBundlers: {
			title: "Understanding JavaScript Bundlers and Frameworks",
			completionStatus: completed,
			points: 10
		},
		webpack: {
			title: "Webpack",
			completionStatus: completed,
			points: 10
		},
		vite: {
			title: "Vite",
			completionStatus: inProgress,
			points: 10
		},
		otherBundlers: {
			title: "Other Bundlers",
			completionStatus: notCompleted,
			points: 10
		},
		otherFrameworks: {
			title: "Other Frameworks",
			completionStatus: notCompleted,
			points: 10
		},
		npm: {
			title: "NPM and Dependency Management",
			completionStatus: notCompleted,
			points: 10
		},
		reactFilm: {
			title: "React. The Film",
			completionStatus: notCompleted,
			points: 10
		},
		reactEvolution: {
			title: "The Evolution of React.js: A Historical Perspective",
			completionStatus: notCompleted,
			points: 5
		},
		reactPlayground: {
			title: "Playground: Testing your React skills",
			completionStatus: notCompleted,
			points: 8
		},
		introTestExercises: {
			title: "Introduction Test Exercises",
			completionStatus: notCompleted,
			points: 12
		},
	});

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
					introductionVideo: courseProgress.introductionVideo,
					understandingJSBundlers: courseProgress.understandingJSBundlers,
					webpack: courseProgress.webpack,
					vite: courseProgress.vite,
					otherBundlers: courseProgress.otherBundlers,
					otherFrameworks: courseProgress.otherFrameworks,
					npm: courseProgress.npm,
				});
				break;
			case "Intro":
				setFilteredCourseProgress({
					reactFilm: courseProgress.reactFilm,
					reactEvolution: courseProgress.reactEvolution,
					reactPlayground: courseProgress.reactPlayground,
					introTestExercises: courseProgress.introTestExercises,
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
				<div className="flex flex-col md:flex-row gap-4">
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
