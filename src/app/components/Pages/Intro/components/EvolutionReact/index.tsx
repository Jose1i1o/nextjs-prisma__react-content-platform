import React, { FC } from 'react'
import AccordionHeader from '@/app/components/shared/Accordion/AccordionHeader'
import { displayCorrectIcon } from '@/app/components/shared/Accordion/DisplayIcon';
import { StyledFirstLetterInParagraph } from '@/app/components/shared/StyledFirstLetterInParagraph';
import { SetToCompleteButton } from '@/app/components/shared/Button/SetToCompleteButton';
import Image from "next/legacy/image";
import { useUserStore } from '@/app/context/store';
import { useCategory } from '@/app/hooks/useCategory';

export const HeaderSliderEvolutionReact: FC<{ blockTitle: string }> = ({ blockTitle }) => {
	return (
		<AccordionHeader>
			{blockTitle && displayCorrectIcon("docs", blockTitle)}
		</AccordionHeader>
	)
}

export const BodySliderEvolutionReact = ({ moduleInfo: {id} }: any) => {
  
  const category = useCategory();
  const { currentUser } = useUserStore();
  const sectionId = id;
  
  return (
    <div className="content p-4">
      <Image
        src="https://res.cloudinary.com/dtvp3u4ql/image/upload/v1694708781/react_page/pv26w69j9quzpskpg238.gif"
        alt="React Logo Animated Gif"
        width={100}
        height={100}
        layout='responsive'
      />
      <StyledFirstLetterInParagraph>
        React, also known as React.js or ReactJS, is a widely-used{" "}
        <strong>JavaScript library</strong> for building user interfaces. Its
        journey began in 2011 when it was created by Jordan Walke, a software
        engineer at Facebook. React was open-sourced by Facebook in 2013, and it
        has since become a cornerstone of modern web development.
      </StyledFirstLetterInParagraph>
      <p>
        <strong>Why React?</strong>
      </p>
      <p>
        React was born out of the need for a more efficient way to build complex
        user interfaces for Facebook's web applications. Traditional web
        development was becoming unwieldy as applications grew in size and
        complexity forming the commonly named <strong>'spaghetti code.'</strong>{" "}
        React introduced a novel concept called the "Virtual DOM," which
        revolutionized the way UI updates were handled.
      </p>
      <p>
        <strong>The Virtual DOM:</strong> React's Virtual DOM is a lightweight
        representation of the actual DOM in memory. When changes occur in a
        React application, they are first made to the Virtual DOM, which is then
        compared to the real DOM. This diffing process allows React to update
        only the parts of the page that have changed, significantly improving
        performance.
      </p>
      <p>
        React's component-based architecture encourages developers to break
        down user interfaces into reusable and composable pieces. This
        modularity simplifies code maintenance and promotes best practices in
        software development.
      </p>
      <p>
        <strong>Today's Popularity:</strong> React has grown far beyond its
        Facebook origins. It has a vast and active community of developers and
        is widely adopted across the web industry. Many leading companies,
        including Airbnb, Netflix, Instagram, and WhatsApp, rely on React for
        their web and mobile applications.
      </p>
      <p>
        React's popularity can be attributed to its developer-friendly nature,
        the extensive ecosystem of libraries and tools surrounding it (such as
        Redux for state management and React Router for routing), and its active
        development by Facebook and the open-source community.
      </p>
      <p>
        <strong>Evolution Over the Years:</strong> React has undergone
        significant evolution since its inception. The introduction of React
        Hooks in version 16.8 provided a more concise way to work with
        component state and lifecycle methods, making functional components
        just as powerful as class components.
      </p>
      <p>
        React's commitment to backward compatibility ensures a smooth upgrade
        path for developers, allowing them to adopt new features without
        breaking existing code. The community-driven nature of React development
        has led to the creation of numerous third-party libraries, enhancing
        React's capabilities and making it even more versatile.
      </p>
      <p>
        <strong>Conclusion:</strong> React has fundamentally changed the way
        web applications are developed. Its history, rooted in solving real-world
        problems at Facebook, has led to a library that empowers developers to
        create dynamic and interactive user interfaces with ease.
      </p>
      <p>
        As you explore the world of React, you'll find that its principles and
        concepts have a profound impact on modern web development. Whether
        you're building a personal project or working on a large-scale
        application, React's versatility and community support make it an
        excellent choice for your web development journey.
      </p>
      <SetToCompleteButton currentuser={currentUser} sectionid={sectionId} category={category}/>
    </div>
  )
}