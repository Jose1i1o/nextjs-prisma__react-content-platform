"use client";

import React, { FC } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsTerminal } from "react-icons/bs";

type Props = {};

const Bundlers: FC = (props: Props) => {
	return (
		<div className="p-4">
			<Accordion variant="splitted" className="my-2">
				<AccordionItem
					key={0}
					aria-label="Understanding JavaScript Bundlers and Frameworks"
					title="0. Understanding JavaScript Bundlers and Frameworks"
				>
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
					</div>
				</AccordionItem>
				<AccordionItem key={1} aria-label="Webpack" title="1. Webpack">
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
				</AccordionItem>
				<AccordionItem key={2} aria-label="Vite" title="2. Vite">
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
				</AccordionItem>
				<AccordionItem
					key={3}
					aria-label="Other Bundlers"
					title="3. Other Bundlers"
				>
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
				</AccordionItem>
				<AccordionItem
					key={4}
					aria-label="Other Frameworks"
					title="4. Other Frameworks"
				>
					<>
						<div className="content p-4">
							<p>
								If you are looking for more efficient frameworks for building
								web applications, consider:
							</p>
							<div>
								<ul className="list-disc pl-6 my-2">
									<li>
										<p className="text-gray-700">
											<strong>4.1. Next.js:</strong> Offers server-side
											rendering, automatic code splitting, and routing, making
											it efficient for SEO and performance.
										</p>
										<p className="text-gray-700">
											Learn more about Next.js at{" "}
											<a
												className="text_link"
												href="https://nextjs.org/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Bun Website
											</a>
										</p>
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
														npx create-next-app
													</code>
												</pre>
											</div>
										</div>
									</li>
									<li>
										<p className="text-gray-700">
											<strong>4.2. Remix:</strong> A modern framework focusing
											on server-rendered React applications with an emphasis on
											fast navigation and developer experience.
										</p>
										<p className="text-gray-700">
											Learn more about Bun at{" "}
											<a
												className="text_link"
												href="https://remix.run/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Bun Website
											</a>
										</p>
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
														npx create-remix
													</code>
												</pre>
											</div>
										</div>
									</li>
									<li>
										<p className="text-gray-700">
											<strong>4.3. Gatsby:</strong> Known for building
											blazing-fast websites with pre-rendering, image
											optimization, and content sourcing from various data
											sources.
										</p>
										<p className="text-gray-700">
											Learn more about Bun at{" "}
											<a
												className="text_link"
												href="https://www.gatsbyjs.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Gatsby Website
											</a>
										</p>
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
														npx create-gatsby
													</code>
												</pre>
											</div>
										</div>
									</li>
									<li>
										<p className="text-gray-700">
											<strong>4.4. Expo:</strong> is a React framework that lets
											you create universal Android, iOS, and web apps with truly
											native UIs.
										</p>
										<p className="text-gray-700">
											Learn more about Expo at{" "}
											<a
												className="text_link"
												href="https://expo.dev/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Expo Website
											</a>
										</p>
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
														npx create-expo-app
													</code>
												</pre>
											</div>
										</div>
									</li>
								</ul>
								<p className="text-gray-700">
									Each of these frameworks has its own strengths and can be
									chosen based on the specific requirements of your project.
								</p>
							</div>
						</div>
					</>
				</AccordionItem>
				<AccordionItem
					key={10}
					aria-label="NPM and Dependency Management"
					title="5. NPM and Dependency Management"
				>
					<Accordion selectionMode="multiple" variant="splitted">
						<AccordionItem
							key={5.1}
							aria-label="What is NPM?"
							title="What is NPM?"
							className="my-2"
						>
							<div className="content p-4">
								<p className="text-gray-700 pb-4">
									NPM (Node Package Manager) is a tool that manages dependencies
									for both client and backend projects. It simplifies the
									installation of necessary project dependencies, which are code
									packages created by others to accelerate development.
								</p>
								<p className="text-gray-700 pb-4">
									Before dependency managers like NPM, JavaScript was primarily
									used for implementing widgets and interface elements. Managing
									dependencies required manual downloading, importing, and
									dealing with browser compatibility issues, as each dependency
									became global, impacting performance.
								</p>
								<p className="text-gray-700 pb-4">
									Nowadays, NPM saves data as .tar files in the npm cache
									folder, ensuring reliability and efficiency. Dependency
									updates are simplified, and corrupted data is manually
									removed.
								</p>
								<p className="text-gray-700 pb-4">
									The rise of frameworks like Angular, Backbone, and Ember in
									2010 introduced the concept of Single Page Applications
									(SPAs), which changed the way web development was done. SPAs
									limited server communication to when necessary, improving
									security by limiting web-crawler access.
								</p>
								<p className="text-gray-700 pb-4">
									Dependency managers like NPM also handle dependencies that
									rely on other dependencies, improving maintainability and
									avoiding conflicts between versions.
								</p>
								<figure className="flex flex-col items-center p-4">
									<img
										src="https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto,h_550/v1/react_page/ms0vfpebriiszmlf7ql0"
										alt="Package Dependency Graph"
										className="h-25 w-50 mx-auto"
									/>
									<figcaption className="text-center text-gray-700 pb-2">
										Image: Package Dependency Graph
									</figcaption>
								</figure>
							</div>
						</AccordionItem>
						<AccordionItem
							key={5.2}
							aria-label="How do dependy managers work?"
							title="How do dependy managers work?"
							className="my-2"
						>
							<p className="text-gray-700 pb-4">
								Dependency managers coordinate and centralize library
								integration, ensuring your project's sustainability by allowing
								easy importing of new dependencies or updating existing ones.
							</p>
							<p className="text-gray-700 pb-4">How NPM Works:</p>
							<ol className="list-decimal pl-6 my-2">
								<li className="text-gray-700">
									NPM reads the package.json file.
								</li>
								<li className="text-gray-700">
									Orders dependencies alphabetically.
								</li>
								<li className="text-gray-700">
									Checks if any dependencies have already been installed.
								</li>
								<li className="text-gray-700">
									Downloads metadata for all required dependencies.
								</li>
								<figure className="flex flex-col items-center p-4">
									<img
										src="https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto,h_550/v1/react_page/cnbpiqpdd6byvc40pfdl"
										alt="Metadata download process"
										className="h-25 w-50 mx-auto"
									/>
									<figcaption className="text-center text-gray-700 pb-2">
										Image: Metadata download process
									</figcaption>
								</figure>
								<li className="text-gray-700">
									Determines the best match (latest possible version) and
									downloads the tarball for each dependency.
								</li>
								<li className="text-gray-700">
									Once downloaded and unpacked, it checks dependencies
									recursively.
								</li>
								<li className="text-gray-700">
									If there are no more dependencies, it continues.
								</li>
								<li className="text-gray-700">
									Checks for install scripts and runs them if they exist.
								</li>
								<li className="text-gray-700">Module has been installed.</li>
							</ol>
							<p className="text-gray-700 pb-4">
								NPM also follows semantic versioning with major, minor, patch,
								pre-release, and build versions of packages. The package.json
								and package-lock.json files help manage dependencies.
							</p>
							<figure className="flex flex-col items-center p-4">
								<img
									src="https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto,h_250/v1/react_page/mnig3bnafljfupjech09"
									alt="Webpack Dependency Graph"
									className="h-25 w-50 mx-auto"
								/>
								<figcaption className="text-center text-gray-700 pb-2">
									Image: Semantic versioning of packages
								</figcaption>
							</figure>
							<p className="text-gray-700 pb-4">Types of Dependencies:</p>
							<ul className="list-disc pl-6 my-2">
								<li className="text-gray-700">
									<strong>Production Dependencies:</strong> These are mandatory
									for running the project.
								</li>
								<li className="text-gray-700">
									<strong>Development Dependencies:</strong> Needed during
									development but not required for the application to run.
								</li>
								<li className="text-gray-700">
									<strong>Global Dependencies:</strong> Required by the
									operating system for tools like nodemon.
								</li>
							</ul>
						</AccordionItem>
						<AccordionItem
							key={5.3}
							aria-label="Alternatives to NPM"
							title="Alternatives to NPM"
							className="my-2"
						>
							<p className="text-gray-700 pb-4">
								Alternatives to NPM also exist for dependency management, such
								as yarn and pnpm.
							</p>
							<div className="flex align-left">
								<img
									src="https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto,h_150/v1/react_page/smyfxmvwjpmnh49ugul8"
									alt="Metadata download process"
								/>
								<img
									src="https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto,h_100/v1/react_page/ad3xqed08h9vxszkwthf"
									alt="Metadata download process"
									className="m-5"
								/>
							</div>
						</AccordionItem>
						<AccordionItem
							className="text-gray-700"
							key={5.4}
							aria-label="Web bundling is important for performance"
							title="Web bundling is important for performance"
						>
							<h2 className="pb-4">
								We can use some webs to check the size of our
								libraries/frameworks before we even make use of them.
							</h2>

							<p className="pb-4">
								BundlePhobia and PackagePhobia are two valuable web tools that
								have become essential for developers in the world of JavaScript
								and package management. These platforms provide crucial insights
								into the size and impact of JavaScript packages, helping
								developers make informed decisions when selecting and including
								dependencies in their projects.
							</p>
							<h3 className="text-gray-700 pb-4">
								<strong>BundlePhobia:</strong>
							</h3>
							<p className="pb-4">
								BundlePhobia offers a comprehensive analysis of JavaScript
								packages, focusing on their bundled size. It calculates the size
								of a package when bundled with all its dependencies.
								BundlePhobia allows users to search for packages, view detailed
								information, and assess potential alternatives that might be
								more lightweight. By offering insights into download statistics,
								gzip and minified sizes, and version comparisons, BundlePhobia
								empowers developers to choose packages that align with their
								project's requirements and constraints.
							</p>
							<p className="text-gray-700 pb-4">
								Learn more about this at{" "}
								<a
									className="text_link"
									href="https://bundlephobia.com/package/moment@2.29.4"
									target="_blank"
									rel="noopener noreferrer"
								>
									BundlePhobia Website
								</a>
							</p>
							<h3 className="text-gray-700 pb-4">
								<strong>PackagePhobia:</strong>
							</h3>
							<p className="pb-4">
								On the other hand, PackagePhobia takes a broader view of
								packages by evaluating their overall impact on a project. It not
								only considers the package size but also calculates the
								potential increase in the total size of a project when the
								package is added as a dependency. This holistic approach helps
								developers make well-informed decisions, especially when
								considering the cumulative effect of multiple dependencies.
							</p>
							<p className="text-gray-700 pb-4">
								Learn more about this at{" "}
								<a
									className="text_link"
									href="https://packagephobia.com/result?p=moment"
									target="_blank"
									rel="noopener noreferrer"
								>
									PackagePhobia Website
								</a>
							</p>

							<p className="pb-4 font-bold">
								In an ecosystem where every kilobyte matters, BundlePhobia and
								PackagePhobia have become indispensable tools for JavaScript
								developers. They promote best practices in package selection and
								usage, ultimately contributing to the creation of faster, more
								optimized, and efficient web applications.
							</p>
						</AccordionItem>
					</Accordion>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Bundlers;
