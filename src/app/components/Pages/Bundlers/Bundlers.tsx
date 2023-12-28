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
import { GenericBlockProps, accordionItemProps } from "@/app/types";

const Bundlers: FC<GenericBlockProps> = ({ courseProgress }) => {
  const moduleIndex = 0;

  const accordionItems: accordionItemProps = [
    {
      id: moduleIndex,
      title: <HeaderSliderReactDocumentary blockTitle={courseProgress.module0.introductionVideo.title} />,
      content: <BodySliderReactDocumentary />,
    },
    {
      id: moduleIndex + 1,
      title: <HeaderUnderstandingJavaScriptBundlersAndFrameworks blockTitle={courseProgress.module0.understandingJSBundlers.title} />,
      content: <BodyUnderstandingJavaScriptBundlersAndFrameworks />,
    },
    {
      id: moduleIndex + 2,
      title: <HeaderSliderWebpack blockTitle={courseProgress.module0.webpack.title} />,
      content: <BodySliderWebpack />,
    },
    {
      id: moduleIndex + 3,
      title: <HeaderSliderVite blockTitle={courseProgress.module0.vite.title} />,
      content: <BodySliderVite />,
    },
    {
      id: moduleIndex + 4,
      title: <HeaderSliderOtherBundlers blockTitle={courseProgress.module0.otherBundlers.title} />,
      content: <BodySliderOtherBundlers />,
    },
    {
      id: moduleIndex + 5,
      title: <HeaderSliderOtherFrameworks blockTitle={courseProgress.module0.otherFrameworks.title} />,
      content: <BodySliderOtherFrameworks />,
    },
    {
      id: moduleIndex + 6,
      title: <HeaderSliderNPM blockTitle={courseProgress.module0.npm.title} />,
      content: <BodySliderNPM />,
    },
  ];

  return <AccordionGeneric accordionItems={accordionItems} />;
};

export default Bundlers;