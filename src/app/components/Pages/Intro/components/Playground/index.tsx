import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import WithPlayground from '@/app/components/shared/Shandbox/WithPlayground';
import WithFiles from '@/app/components/shared/Shandbox/WithFiles';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';
import { useUserStore } from '@/app/context/store';

export const HeaderSliderPlayground: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderPlayground = ({ moduleInfo: {id} }: any) => {
  
  const { currentUser } = useUserStore();
  const sectionId = id;
	
  return (
		<>
    	<WithPlayground />
			{/* <WithFiles /> */}
			<SetToCompleteButton currentUser={currentUser} sectionId={sectionId} />
		</>
  )
}