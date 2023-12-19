"use client";

import React, { FC } from "react";
import { 
	HeaderSlider0, 
	BodySlider0, 
	HeaderSlider1, 
	BodySlider1,
	HeaderSlider2,
	BodySlider2,
	HeaderSlider3,
	BodySlider3,
 } from "./components";
import AccordionGeneric from "../../shared/Accordion/AccordionGeneric";

type Props = {};

const Intro: FC = (props: Props) => {

	const accordionItems = [
		{
			id: 0,
			title: <HeaderSlider0 />,
			content: <BodySlider0 />,
		},
		{
			id: 1,
			title: <HeaderSlider1 />,
			content: <BodySlider1 />,
		},
		{
			id: 2,
			title: <HeaderSlider2 />,
			content: <BodySlider2 />,
		},
		{
			id: 3,
			title: <HeaderSlider3 />,
			content: <BodySlider3 />,
		},
	];

	

	return (
		<AccordionGeneric accordionItems={accordionItems} />
		);
};

export default Intro;
