import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { BsTerminal } from 'react-icons/bs';
import { HeaderProps } from '@/app/types';

export const HeaderSliderWebpack:FC<HeaderProps>= ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderWebpack = () => {
  return (
		<>
			<div className="content p-4">
				<p className="text-gray-700">
					1.1 Webpack has historically been a powerful module bundler that
					played a crucial role in modern frontend development. As a
					module bundler, it served as a fundamental tool throughout the
					development stage of web applications. At its core, Webpack
					bundles JavaScript code, which means it takes all the JavaScript
					modules, along with their dependencies, and packages them into a
					single, optimized file or multiple files. This bundling process
					not only combines different modules but also transpiles the code
					to a version that all browsers can understand. It's essential
					for ensuring cross-browser compatibility and handling newer
					JavaScript features not supported in older browsers.
				</p>
				<figure className="flex flex-col items-center p-4">
					<img
						src="https://res.cloudinary.com/dtvp3u4ql/image/upload/v1693993470/react_page/r2pocbu1n6krsrdge1ua.webp"
						alt="Webpack Dependency Graph"
						className="h-25 w-50 mx-auto"
					/>
					<figcaption className="text-center text-gray-700 pb-2">
						Image: Webpack Dependency Graph
					</figcaption>
				</figure>

				<p className="text-gray-700">
					In the past, Webpack went beyond mere bundling; it also
					minimized the code, making it more efficient by eliminating
					whitespace, comments, and optimizing imports. Moreover, Webpack
					automated various processes required to build assets for web
					applications. It could handle tasks like minification, image
					optimization, CSS preprocessing (e.g., Sass), and even lazy
					loading and code splitting. The dependency graph created by
					Webpack mapped out the relationships between different modules
					and helped in optimizing the loading of assets. Lazy loading
					allowed parts of the application to load only when needed,
					improving initial load times, while code splitting divided the
					bundle into smaller chunks, reducing the size of the initial
					load and improving overall performance.
				</p>

				<p className="text-gray-700 pt-4">
					However, in recent times, the frontend development landscape has
					evolved, and faster alternatives like Vite have gained
					popularity. To install the webpack in its original form you can
					follow the this steps:
				</p>

				<div className="p-2 my-2 bg-gray-200 rounded-md">
					<div className="my-2">
						<BsTerminal size={25} className="inline-block mr-2 mb-2" />
						<span className="text-gray-700 font-bold">Terminal</span>
						<pre className="bg-gray-800 text-white">
							<code className="block p-2 highlighted-text">
								npx create-react-app my-app
							</code>
							<code className="block p-2 highlighted-text">
								cd my-app
							</code>
							<code className="block p-2 highlighted-text">
								npm start
							</code>
						</pre>
					</div>
				</div>

				<p className="text-gray-700 pt-4">
					<strong>Strengths:</strong>
					<ul className="list-disc pl-6 my-2">
						<li>Powerful and flexible.</li>
						<li>Supports a wide range of plugins and loaders.</li>
						<li>Extensive community support and ecosystem.</li>
					</ul>
					<strong>Weaknesses:</strong>
					<ul className="list-disc pl-6 my-2">
						<li>
							Complex configuration setup can be intimidating for
							beginners.
						</li>
						<li>
							Initial configuration may be overwhelming for simple
							projects.
						</li>
					</ul>
				</p>

				<p className="text-gray-700">
					Learn more about Webpack at{" "}
					<a className="text_link" href="https://webpack.js.org/">
						https://webpack.js.org
					</a>
					.
				</p>
			</div>
		</>
	
  )
}