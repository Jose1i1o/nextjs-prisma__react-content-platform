import React from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import { BsTerminal } from 'react-icons/bs';


const title = "Vite"

export const HeaderSliderVite: React.FC= _ => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", title)}
		</AccordionHeader>
	)
}

export const BodySliderVite = () => {
  return (
    <>
			<div className="content p-4">
				<p className="text-gray-700">
					2.1. Vite is a newer and faster alternative to webpack. It
					leverages ES modules for rapid development and has gained
					popularity for React projects as well. To create a React project
					with Vite, use the following commands:
				</p>
				<div className="p-2 my-2 bg-gray-200 rounded-md">
					<div className="my-2">
						<BsTerminal size={25} className="inline-block mr-2 mb-2" />
						<span className="text-gray-700 font-bold">Terminal</span>
						<p className="text-gray-700">With NPM:</p>
						<pre className="bg-gray-800 text-white">
							<code className="block p-2 highlighted-text">
								npm create vite@latest
							</code>
							<code className="block p-2 highlighted-text">
								cd my-app
							</code>
							<code className="block p-2 highlighted-text">
								npm run dev
							</code>
						</pre>
						<span className="text-gray-700">With Yarn:</span>
						<pre className="bg-gray-800 text-white">
							<code className="block p-2 highlighted-text">
								yarn create vite
							</code>
						</pre>
						<span className="text-gray-700">With PNPM:</span>
						<pre className="bg-gray-800 text-white">
							<code className="block p-2 highlighted-text">
								pnpm create vite
							</code>
						</pre>
					</div>
				</div>

				<p className="text-gray-700">
					<strong>Strengths:</strong>
					<ul className="list-disc pl-6 my-2">
						<li>
							Lightning-fast development and bundling due to native ES
							modules support.
						</li>
						<li>Zero-config setup for most projects.</li>
						<li>Great developer experience and fast reloading.</li>
					</ul>
					<strong>Weaknesses:</strong>
					<ul className="list-disc pl-6 my-2">
						<li>
							Relatively newer, so the ecosystem may not be as mature as
							webpack.
						</li>
						<li>
							May not be suitable for complex projects with custom
							configurations.
						</li>
					</ul>
				</p>
				<p className="text-gray-700">
					Learn more about Vite at{" "}
					<a className="text_link" href="https://vitejs.dev/">
						https://vitejs.dev
					</a>
					.
				</p>
			</div>
		</>
  )
}