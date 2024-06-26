import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';
import { useUserStore } from '@/app/context/store';
import { useCategory } from '@/app/hooks/useCategory';

export const HeaderSliderIntroVideo: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
    <>
		<AccordionHeader>
			{displayCorrectIcon("video", blockTitle)}
		</AccordionHeader>
    </>
	)
}

export const BodySliderIntroVideo = ({ moduleInfo: {id} }: any) => {
  
  const category = useCategory();
  const { currentUser } = useUserStore();
  const sectionId = id;

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
    <SetToCompleteButton currentuser={currentUser} sectionid={sectionId} category={category}/>
    </>
  );
};