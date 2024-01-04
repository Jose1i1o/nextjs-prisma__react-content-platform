import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import WithPlayground from '@/app/components/shared/Shandbox/WithPlayground';
import WithFiles from '@/app/components/shared/Shandbox/WithFiles';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';

export const HeaderSliderPlayground: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderPlayground = () => {
  return (
		<>
    	<WithPlayground />
			{/* <WithFiles /> */}
			<SetToCompleteButton />
		</>
  )
}