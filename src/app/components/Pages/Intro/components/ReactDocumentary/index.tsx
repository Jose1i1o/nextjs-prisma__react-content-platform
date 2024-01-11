import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import {SetToCompleteButton} from '@/app/components/shared/Button/SetToCompleteButton';
import { useUserStore } from '@/app/context/store';

export const HeaderSliderReactDocumentary: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderReactDocumentary = ({ moduleInfo: {id} }: any) => {
  
  const { currentUser } = useUserStore();
  const sectionId = id;

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
      <SetToCompleteButton currentUser={currentUser} sectionId={sectionId} />
    </>
  );
};