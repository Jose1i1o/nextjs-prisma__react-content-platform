import React from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import WithTests from '@/app/components/shared/Shandbox/WithTests';


const title = "Introduction Test Exercises"

export const HeaderSlider3: React.FC= _ => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("test", title)}
		</AccordionHeader>
	)
}

export const BodySlider3 = () => {
  return (
    <WithTests />
  )
}