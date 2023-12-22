import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import WithPlayground from '@/app/components/shared/Shandbox/WithPlayground';
import WithFiles from '@/app/components/shared/Shandbox/WithFiles';
import { HeaderProps } from '@/app/types';

export const HeaderSlider2: FC<HeaderProps> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("code", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySlider2 = () => {
  return (
		<>
    	<WithPlayground />
			{/* <WithFiles /> */}
		</>
  )
}