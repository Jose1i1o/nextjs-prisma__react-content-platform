import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';

export const HeaderSliderReactDocumentary: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
    <>
		<AccordionHeader>
			{displayCorrectIcon("video", blockTitle)}
		</AccordionHeader>
    </>
	)
}

export const BodySliderReactDocumentary = () => {
  return (
    <>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/C0DPdy98e4c?si=ug1uzP0ZECOZjdvH"
      title="React. The Film"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ maxWidth: '100%' }}
    ></iframe>
    <SetToCompleteButton  />
    </>
  );
};