"use client";

import React, { FC } from "react";
import { 
	HeaderSliderIntroVideo,
	BodySliderIntroVideo,
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
 } from "./components";
import AccordionGeneric from "../../shared/Accordion/AccordionGeneric";
import { ModuleInfo, Section } from "@/app/types";
import { createAccordionItems } from "../../shared/Accordion/CreateAccordionItems";

const Bundlers: FC<ModuleInfo> = ({ moduleInfo }) => {

	const { sections } = moduleInfo ? moduleInfo : { sections: [] };
	

	const headerSliders = [HeaderSliderIntroVideo, HeaderUnderstandingJavaScriptBundlersAndFrameworks, HeaderSliderWebpack, HeaderSliderVite, HeaderSliderOtherBundlers, HeaderSliderOtherFrameworks, HeaderSliderNPM];
	
	const bodySliders = sections?.map((_, index) => {
		const BodyComponent = [
			BodySliderIntroVideo, 
			BodyUnderstandingJavaScriptBundlersAndFrameworks, 
			BodySliderWebpack, 
			BodySliderVite, 
			BodySliderOtherBundlers, 
			BodySliderOtherFrameworks, 
			BodySliderNPM
		][index];

		return BodyComponent;
	});
	
	const accordionItems = createAccordionItems(sections, headerSliders, bodySliders);
	
	return (
		<AccordionGeneric accordionItems={accordionItems} />
	);
}

export default Bundlers;