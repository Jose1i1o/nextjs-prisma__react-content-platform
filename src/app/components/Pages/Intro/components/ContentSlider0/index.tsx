import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { HeaderProps } from '@/app/types';
import Button from '@/app/components/shared/Button/Button';

export const HeaderSlider0: FC<HeaderProps> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("video", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySlider0 = () => {
  return (
    <>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/gmp0istg5xo?si=1ozd01yCJfbbDnyQ"
        title="React. The Film"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ maxWidth: '100%' }}
      ></iframe>
      <Button label="Complete" onClick={() => console.log("clicked")} icon={"check"} />
    </>
  );
};