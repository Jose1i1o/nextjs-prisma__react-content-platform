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

const Bundleres = dynamic(
	() => import("./components/Pages/Bundleres/Bundleres")
);

const Intro = dynamic(() => import("./components/Pages/Intro/Intro"));

const UseState = dynamic(() => import("./components/Pages/UseState/UseState"));

export default function Home() {
	// const listings = await getListings();

	const params = useSearchParams();
	const category = params?.get("category");

	let componentToRender;

	switch (category) {
		case "Bundlers":
			componentToRender = <Bundleres />;
			break;
		case "Intro":
			componentToRender = <Intro />;
			break;
		case "useState":
			componentToRender = <UseState />;
			break;
		case "prop drilling":
			componentToRender = <UseState />;
			break;
		case "prevState":
			componentToRender = <UseState />;
			break;
		case "useEffect":
			componentToRender = <UseState />;
			break;
		case "conditionals":
			componentToRender = <UseState />;
			break;
		case "Routing":
			componentToRender = <UseState />;
			break;
		case "useContext":
			componentToRender = <UseState />;
			break;
		case "Forms":
			componentToRender = <UseState />;
			break;
		case "useReducer":
			componentToRender = <UseState />;
			break;
		case "Async/Await":
			componentToRender = <UseState />;
			break;
		case "Dinamic Routing":
			componentToRender = <UseState />;
			break;
		case "Styled Components":
			componentToRender = <UseState />;
			break;
		case "Private Routes":
			componentToRender = <UseState />;
			break;
		case "Memoization":
			componentToRender = <UseState />;
			break;
		case "Optimizations":
			componentToRender = <UseState />;
			break;
		default:
			componentToRender = <EmptyState showReset />;
	}

	useEffect(() => {
		// console.log("category", category);
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
