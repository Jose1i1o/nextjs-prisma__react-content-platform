"use client";

import dynamic from "next/dynamic";
import { use, useEffect } from "react";
import getListings from "./actions/getListings";
import { usePathname, useSearchParams } from "next/navigation";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";

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

	const params = useSearchParams();
	const category = params?.get("category");

	let componentToRender;

	switch (category) {
		case "Bundlers":
			componentToRender = <Bundlers />;
			break;
		case "Intro":
			componentToRender = <Intro />;
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
		console.log("category", category);
	}, [category]);

	return (
		<ClientOnly>
			<Container>{componentToRender}</Container>
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
