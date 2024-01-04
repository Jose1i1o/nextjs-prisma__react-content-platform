"use client";

import React, { FC } from "react";
import { 
	HeaderSliderReactDocumentary,
	BodySliderReactDocumentary,
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
import { ModuleInfo } from "@/app/types";
import { createAccordionItems } from "../../shared/Accordion/CreateAccordionItems";

const Bundlers: FC<ModuleInfo> = ({ moduleInfo }) => {

  const { sections } = moduleInfo ? moduleInfo : { sections: [] };
	

  const headerSliders = [HeaderSliderReactDocumentary, HeaderUnderstandingJavaScriptBundlersAndFrameworks, HeaderSliderWebpack, HeaderSliderVite, HeaderSliderOtherBundlers, HeaderSliderOtherFrameworks, HeaderSliderNPM];
  const bodySliders = [BodySliderReactDocumentary, BodyUnderstandingJavaScriptBundlersAndFrameworks, BodySliderWebpack, BodySliderVite, BodySliderOtherBundlers, BodySliderOtherFrameworks, BodySliderNPM];

  const accordionItems = createAccordionItems(sections, headerSliders, bodySliders);
  
    return (
      <AccordionGeneric accordionItems={accordionItems} />
    );
  }

export default Bundlers;