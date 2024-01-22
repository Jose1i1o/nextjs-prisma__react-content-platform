import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import WithTests from '@/app/components/shared/Shandbox/WithTests';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';
import { useUserStore } from '@/app/context/store';

export const HeaderSliderExercises: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderExercises = ({ moduleInfo: {id} }: any) => {
  
  const { currentUser } = useUserStore();
  const sectionId = id;
	
  return (
		<>
    	<WithTests />
      <SetToCompleteButton currentuser={currentUser} sectionid={sectionId} />
		</>
  )
}