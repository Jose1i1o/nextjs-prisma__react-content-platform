import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/DisplayIcon';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { HeaderProps } from '@/app/types';

export const HeaderSliderNPM:FC<HeaderProps> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderNPM = () => {
  return (
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
  )
}