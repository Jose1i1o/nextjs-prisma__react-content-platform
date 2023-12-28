import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { BsTerminal } from 'react-icons/bs';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { HeaderProps } from '@/app/types';

export const HeaderSliderOtherBundlers:FC<HeaderProps> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderOtherBundlers = () => {
  return (
    <>
      <div className="content p-4">
			  <p className="text-gray-700 mb-4">
			  	3.1. There are other bundlers like Rollup, Snowpack, Gulp,
			  	ESBuild, and Bun. Each has its own strengths and use cases, so you
			  	can explore them based on your project's requirements. If you are
			  	looking for more efficient frameworks for building web
			  	applications, consider:
			  </p>
			  <Accordion selectionMode="multiple" variant="splitted">
			  	<AccordionItem
			  		key={5}
			  		aria-label="Rollup"
			  		title="Rollup"
			  		className="my-2"
			  	>
			  		<>
			  			<p className="text-gray-700">
			  				<strong>3.1.1. Rollup:</strong> Rollup is a module bundler
			  				that is especially good for building JavaScript libraries
			  				and packages. It offers tree-shaking, which means it can
			  				eliminate unused code, resulting in smaller bundle sizes. To
			  				install Rollup, use the following command:
			  				<br />
			  				<div className="p-2 my-2 bg-gray-200 rounded-md">
			  					<div className="my-2">
			  						<BsTerminal
			  							size={25}
			  							className="inline-block mr-2 mb-2"
			  						/>
			  						<span className="text-gray-700 font-bold">
			  							Terminal
			  						</span>
			  						<pre className="bg-gray-800 text-white">
			  							<code className="block p-2 highlighted-text">
			  								npm install rollup --save-dev
			  							</code>
			  						</pre>
			  					</div>
			  				</div>
			  				<p className="text-gray-700">
			  					Learn more about Rollup at{" "}
			  					<a
			  						className="text_link"
			  						href="https://rollupjs.org/"
			  						target="_blank"
			  						rel="noopener noreferrer"
			  					>
			  						Rollup Website
			  					</a>
			  				</p>
			  			</p>
			  		</>
			  	</AccordionItem>
			  	<AccordionItem
			  		key={6}
			  		aria-label="Snowpack"
			  		title="Snowpack"
			  		className="my-2"
			  	>
			  		<>
			  			<p className="text-gray-700">
			  				<strong>3.1.2. Snowpack:</strong> Snowpack is a modern
			  				frontend build tool that focuses on fast development and
			  				instant dev server startup. It's great for building web
			  				applications with minimal configuration. To install
			  				Snowpack, use the following command:
			  				<br />
			  				<div className="p-2 my-2 bg-gray-200 rounded-md">
			  					<div className="my-2">
			  						<BsTerminal
			  							size={25}
			  							className="inline-block mr-2 mb-2"
			  						/>
			  						<span className="text-gray-700 font-bold">
			  							Terminal
			  						</span>
			  						<pre className="bg-gray-800 text-white">
			  							<code className="block p-2 highlighted-text">
			  								npm install snowpack --save-dev
			  							</code>
			  						</pre>
			  					</div>
			  				</div>
			  				<p className="text-gray-700">
			  					Learn more about Snowpack at{" "}
			  					<a
			  						className="text_link"
			  						href="https://www.snowpack.dev/"
			  						target="_blank"
			  						rel="noopener noreferrer"
			  					>
			  						Snowpack Website
			  					</a>
			  				</p>
			  			</p>
			  		</>
			  	</AccordionItem>
			  	<AccordionItem
			  		key={7}
			  		aria-label="Gulp"
			  		title="Gulp"
			  		className="my-2"
			  	>
			  		<>
			  			<p className="text-gray-700">
			  				<strong>3.1.3. Gulp:</strong> Gulp is a task runner that
			  				automates repetitive tasks in your development workflow.
			  				It's highly configurable and can be used for a wide range of
			  				tasks. To install Gulp, use the following command:
			  				<br />
			  				<div className="p-2 my-2 bg-gray-200 rounded-md">
			  					<div className="my-2">
			  						<BsTerminal
			  							size={25}
			  							className="inline-block mr-2 mb-2"
			  						/>
			  						<span className="text-gray-700 font-bold">
			  							Terminal
			  						</span>
			  						<pre className="bg-gray-800 text-white">
			  							<code className="block p-2 highlighted-text">
			  								npm install gulp --save-dev
			  							</code>
			  						</pre>
			  					</div>
			  				</div>
			  				<p className="text-gray-700">
			  					Learn more about Gulp at{" "}
			  					<a
			  						className="text_link"
			  						href="https://gulpjs.com/"
			  						target="_blank"
			  						rel="noopener noreferrer"
			  					>
			  						Gulp Website
			  					</a>
			  				</p>
			  			</p>
			  		</>
			  	</AccordionItem>
			  	<AccordionItem
			  		key={8}
			  		aria-label="ESBuild"
			  		title="ESBuild"
			  		className="my-2"
			  	>
			  		<>
			  			<p className="text-gray-700">
			  				<strong>3.1.4. ESBuild:</strong> ESBuild is an extremely
			  				fast JavaScript bundler and minifier. It's known for its
			  				rapid build times and can be a great choice for optimizing
			  				production builds. To install ESBuild, use the following
			  				command:
			  				<br />
			  				<div className="p-2 my-2 bg-gray-200 rounded-md">
			  					<div className="my-2">
			  						<BsTerminal
			  							size={25}
			  							className="inline-block mr-2 mb-2"
			  						/>
			  						<span className="text-gray-700 font-bold">
			  							Terminal
			  						</span>
			  						<pre className="bg-gray-800 text-white">
			  							<code className="block p-2 highlighted-text">
			  								npm install esbuild --save-dev
			  							</code>
			  						</pre>
			  					</div>
			  				</div>
			  				<p className="text-gray-700">
			  					Learn more about ESBuild at{" "}
			  					<a
			  						className="text_link"
			  						href="https://esbuild.github.io/"
			  						target="_blank"
			  						rel="noopener noreferrer"
			  					>
			  						ESBuild Website
			  					</a>
			  				</p>
			  			</p>
			  		</>
			  	</AccordionItem>
			  	<AccordionItem
			  		key={9}
			  		aria-label="Bun"
			  		title="Bun"
			  		className="my-2"
			  	>
			  		<>
			  			<p className="text-gray-700">
			  				<strong>3.1.5. Bun:</strong> Bun is a zero-config bundler
			  				with a focus on simplicity. It aims to make bundling as
			  				straightforward as possible. To install Bun, use the
			  				following command:
			  				<br />
			  				<div className="p-2 my-2 bg-gray-200 rounded-md">
			  					<div className="my-2">
			  						<BsTerminal
			  							size={25}
			  							className="inline-block mr-2 mb-2"
			  						/>
			  						<span className="text-gray-700 font-bold">
			  							Terminal
			  						</span>
			  						<pre className="bg-gray-800 text-white">
			  							<code className="block p-2 highlighted-text">
			  								npm install bun --save-dev
			  							</code>
			  						</pre>
			  					</div>
			  				</div>
			  				<p className="text-gray-700">
			  					Learn more about Bun at{" "}
			  					<a
			  						className="text_link"
			  						href="https://bunjs.dev/"
			  						target="_blank"
			  						rel="noopener noreferrer"
			  					>
			  						Bun Website
			  					</a>
			  				</p>
			  			</p>
			  		</>
			  	</AccordionItem>
			  </Accordion>
			  <p className="text-gray-700 mt-4">
			  	❗️We don't normally have the option to select the bundler. It's
			  	often given by the framework of our choice. But it is important to
			  	understand what it is and what it does.
			  </p>
		</div>
    </>
  )
}