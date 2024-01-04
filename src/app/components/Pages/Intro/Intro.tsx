import React, { FC } from "react";
import {
  HeaderSliderReactDocumentary,
  BodySliderReactDocumentary,
  HeaderSliderEvolutionReact,
  BodySliderEvolutionReact,
  HeaderSliderPlayground,
  BodySliderPlayground,
  HeaderSliderExercises,
  BodySliderExercises,
} from "./components";
import AccordionGeneric from "../../shared/Accordion/AccordionGeneric";
import { GenericModuleProps, ModuleDescription, ModuleInfo, accordionItemProps } from "@/app/types";
import { createAccordionItems } from "../../shared/Accordion/CreateAccordionItems";

const Intro: FC<ModuleInfo> = ({ moduleInfo }) => {

  const { sections } = moduleInfo ? moduleInfo : { sections: [] };

  const headerSliders = [HeaderSliderReactDocumentary, HeaderSliderEvolutionReact, HeaderSliderPlayground, HeaderSliderExercises];
  const bodySliders = [BodySliderReactDocumentary, BodySliderEvolutionReact, BodySliderPlayground, BodySliderExercises];

  const accordionItems = createAccordionItems(sections, headerSliders, bodySliders);
  
  return (
    <AccordionGeneric accordionItems={accordionItems} />
  );
}

export default Intro;
