"use client";

import React, { FC } from "react";
import { 
	HeaderUnderstandingJavaScriptBundlersAndFrameworks,
	BodyUnderstandingJavaScriptBundlersAndFrameworks,
	HeaderSliderWebpack,
	BodySliderWebpack,
	HeaderSliderVite,
	BodySliderVite,
	HeaderSliderOtherBundlers,
	BodySliderOtherBundlers,
	HeaderSliderOtherFrameworks,
	BodySliderOtherFrameworks,
	HeaderSliderNPM,
	BodySliderNPM,
	HeaderSliderReactDocumentary,
	BodySliderReactDocumentary
 } from "./components";
import AccordionGeneric from "../../shared/Accordion/AccordionGeneric";

type Props = {};

const Bundlers: FC = (props: Props) => {

	const startNumber = 0;

	const accordionItems = [
		{
			id: startNumber,
			title: <HeaderSliderReactDocumentary />,
			content: <BodySliderReactDocumentary />,
		},
		{
			id: startNumber + 1,
			title: <HeaderUnderstandingJavaScriptBundlersAndFrameworks />,
			content: <BodyUnderstandingJavaScriptBundlersAndFrameworks />,
		},
		{
			id: startNumber + 2,
			title: <HeaderSliderWebpack />,
			content: <BodySliderWebpack />,
		},
		{
			id: startNumber + 3,
			title: <HeaderSliderVite />,
			content: <BodySliderVite />,
		},
		{
			id: startNumber + 4,
			title: <HeaderSliderOtherBundlers />,
			content: <BodySliderOtherBundlers />,
		},
		{
			id: startNumber + 5,
			title: <HeaderSliderOtherFrameworks />,
			content: <BodySliderOtherFrameworks />,
		},
		{
			id: startNumber + 6,
			title: <HeaderSliderNPM />,
			content: <BodySliderNPM />,
		},
	];


	return (
		<AccordionGeneric accordionItems={accordionItems} />
	);
};

export default Bundlers;
