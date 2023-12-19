import React from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import WithPlayground from '@/app/components/shared/Shandbox/WithPlayground';
import WithFiles from '@/app/components/shared/Shandbox/WithFiles';


const title = "Playground: Testing your React skills"

export const HeaderSlider2: React.FC= _ => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("code", title)}
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