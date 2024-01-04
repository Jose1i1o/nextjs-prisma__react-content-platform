import React, { FC, ReactElement, ComponentType } from 'react';
import { AccordionItem, Section } from '../../../../types/index';

export const createAccordionItems = (
    sections: Section[],
    headerSliders: ComponentType<{ blockTitle: string }>[],
    bodySliders: ComponentType<{}>[]
): AccordionItem[] => {
    return sections.map((section, index) => ({
        id: section.id,
        title: headerSliders[index] ? React.createElement(headerSliders[index], { blockTitle: section.title }) : null,
        content: bodySliders[index] ? React.createElement(bodySliders[index]) : null,
    }));
};
