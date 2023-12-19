import React from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';


const title = "React. The Film"

export const HeaderSlider0: React.FC= _ => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("video", title)}
		</AccordionHeader>
	)
}

export const BodySlider0 = () => {
  return (
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/gmp0istg5xo?si=1ozd01yCJfbbDnyQ"
      title="React. The Film"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ maxWidth: '100%' }}
    ></iframe>
  );
};