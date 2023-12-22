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
  const startNumber = 0;

  const accordionItems: accordionItemProps = [
    {
      id: startNumber,
      title: <HeaderSliderReactDocumentary blockTitle={courseProgress.introductionVideo.title} />,
      content: <BodySliderReactDocumentary />,
    },
    {
      id: startNumber + 1,
      title: <HeaderUnderstandingJavaScriptBundlersAndFrameworks blockTitle={courseProgress.understandingJSBundlers.title} />,
      content: <BodyUnderstandingJavaScriptBundlersAndFrameworks />,
    },
    {
      id: startNumber + 2,
      title: <HeaderSliderWebpack blockTitle={courseProgress.webpack.title} />,
      content: <BodySliderWebpack />,
    },
    {
      id: startNumber + 3,
      title: <HeaderSliderVite blockTitle={courseProgress.vite.title} />,
      content: <BodySliderVite />,
    },
    {
      id: startNumber + 4,
      title: <HeaderSliderOtherBundlers blockTitle={courseProgress.otherBundlers.title} />,
      content: <BodySliderOtherBundlers />,
    },
    {
      id: startNumber + 5,
      title: <HeaderSliderOtherFrameworks blockTitle={courseProgress.otherFrameworks.title} />,
      content: <BodySliderOtherFrameworks />,
    },
    {
      id: startNumber + 6,
      title: <HeaderSliderNPM blockTitle={courseProgress.npm.title} />,
      content: <BodySliderNPM />,
    },
  ];

  return <AccordionGeneric accordionItems={accordionItems} />;
};

export default Bundlers;