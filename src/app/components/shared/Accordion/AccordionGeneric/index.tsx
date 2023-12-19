// AccordionGeneric.js
import React, { FC } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

type Props = {
  accordionItems: {
    id: number;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
};

const AccordionGeneric: FC<Props> = ({ accordionItems }) => {
  
  return (
    <div className="p-4">
      <Accordion variant="splitted" className="my-2" motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1.5,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}>
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            aria-label={item.title?.toString()}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionGeneric;
