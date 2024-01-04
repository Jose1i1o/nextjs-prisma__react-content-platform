import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';


export const HeaderUnderstandingJavaScriptBundlersAndFrameworks: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodyUnderstandingJavaScriptBundlersAndFrameworks = () => {
  return (
		<div className="content p-4">
			<h3 className="text-gray-700">
			<strong>Main Advantages of Using a Web Bundler:</strong>
			</h3>
			<ul className="list-disc pl-6 my-2">
				<li className="text-gray-700">
					<strong>📦 Code Organization:</strong> Web bundlers help
					organize your code into manageable modules and dependencies,
					making it easier to maintain and scale your project.
				</li>
				<li className="text-gray-700">
					<strong>🚀 Optimized Loading:</strong> Bundlers optimize your
					code for production by reducing file sizes, which results in
					faster loading times for your web applications.
				</li>
				<li className="text-gray-700">
					<strong>📚 Dependency Management:</strong> Bundlers handle the
					management of dependencies and ensure that your application
					loads only the necessary code, reducing redundancy.
				</li>
				<li className="text-gray-700">
					<strong>🌳 Tree-Shaking:</strong> Bundlers like Rollup can
					perform tree-shaking, eliminating dead code and unused modules
					from the final bundle, further reducing its size.
				</li>
				<li className="text-gray-700">
					<strong>🖼️ Asset Management:</strong> Bundlers can handle
					various asset types, including styles, images, and fonts, making
					it easier to include them in your project.
				</li>
			</ul>
			<SetToCompleteButton />
		</div>
	
  )
}