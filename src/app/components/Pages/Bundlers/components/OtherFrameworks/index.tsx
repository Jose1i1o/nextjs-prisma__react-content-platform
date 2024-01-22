import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { BsTerminal } from 'react-icons/bs';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';
import { useUserStore } from '@/app/context/store';

export const HeaderSliderOtherFrameworks: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderOtherFrameworks = ({ moduleInfo: {id} }: any) => {
  
  const { currentUser } = useUserStore();
  const sectionId = id;
	
  return (
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
				<SetToCompleteButton currentuser={currentUser} sectionid={sectionId} />
			</div>
		</>
  )
}