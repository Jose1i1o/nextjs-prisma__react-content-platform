'use client'

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
import { GenericBlockProps, accordionItemProps } from "@/app/types";

const Intro: FC<GenericBlockProps> = ({ courseProgress }) => {

  console.log("courseProgress", courseProgress);

  const accordionItems: accordionItemProps = [
    {
      id: 0,
      title: <HeaderSlider0 blockTitle={courseProgress.module1.reactFilm.title} />,
      content: <BodySlider0 />,
    },
    {
      id: 1,
      title: (
        <HeaderSlider1 blockTitle={courseProgress.module1.reactEvolution.title} />
      ),
      content: <BodySlider1 />,
    },
    {
      id: 2,
      title: (
        <HeaderSlider2 blockTitle={courseProgress.module1.reactPlayground.title} />
      ),
      content: <BodySlider2 />,
    },
    {
      id: 3,
      title: (
        <HeaderSlider3
        blockTitle={courseProgress.module1.introTestExercises.title}
       />
      ),
      content: <BodySlider3 />,
    },
  ];

  return <AccordionGeneric accordionItems={accordionItems} />;
};

export default Intro;
