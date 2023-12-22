import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import WithTests from '@/app/components/shared/Shandbox/WithTests';
import { HeaderProps } from '@/app/types';

export const HeaderSlider3: FC<HeaderProps> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("test", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySlider3 = () => {
  return (
    <WithTests />
  )
}