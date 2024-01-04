import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import WithTests from '@/app/components/shared/Shandbox/WithTests';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';

export const HeaderSliderExercises: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderExercises = () => {
  return (
		<>
    	<WithTests />
			<SetToCompleteButton />
		</>
  )
}