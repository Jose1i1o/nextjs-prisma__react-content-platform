"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineHourglass } from "react-icons/ai";
import { FcSurvey } from "react-icons/fc";
import {
	GiLockedChest,
	GiPirateSkull,
	GiTrafficLightsOrange,
	GiDrill,
	GiBackwardTime,
	GiPathDistance,
	GiKickScooter,
	GiRollerSkate,
	GiBoatFishing,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineElectricBike, MdOutlineSailing } from "react-icons/md";
import { PiTrainThin } from "react-icons/pi";
import { SiStyledcomponents, SiRollupdotjs, SiFerrari } from "react-icons/si";

import CategoryBox from "./CategoryBox";
import Container from "./Container";

export const categories = [
	{
		label: "Bundleres",
		icon: SiRollupdotjs,
		description:
			"Master bundlers and roll out snappy performance in your projects!",
	},
	{
		label: "Intro",
		icon: GiRollerSkate,
		description:
			"Get your web development journey rolling with an exciting intro to the field!",
	},
	{
		label: "useState",
		icon: GiKickScooter,
		description:
			"Take a joyride with useState – the scooter of dynamic UIs awaits!",
	},
	{
		label: "prop drilling",
		icon: GiDrill,
		description:
			"Drill into prop magic and connect the dots of data in your components!",
	},
	{
		label: "prevState",
		icon: GiBackwardTime,
		description:
			"Time-travel with prevState and embrace smoother updates in your app!",
	},
	{
		label: "useEffect",
		icon: MdOutlineElectricBike,
		description:
			"Saddle up and explore useEffect's side-effect universe – the journey awaits!",
	},
	{
		label: "conditionals",
		icon: GiTrafficLightsOrange,
		description:
			"Guide the way with conditionals – become a full-stack traffic controller!",
	},
	{
		label: "Routing",
		icon: GiPathDistance,
		description:
			"Navigate dynamic paths in routing and chart your course to engaging experiences!",
	},
	{
		label: "useContext",
		icon: SiFerrari,
		description:
			"Accelerate with useContext and let state soar effortlessly between components!",
	},
	{
		label: "Forms",
		icon: FcSurvey,
		description:
			"Dive into the forms playground – where user input becomes a survey adventure!",
	},
	{
		label: "useReducer",
		icon: GiBoatFishing,
		description:
			"All aboard the reducer train! Restore harmony in complex state galaxies!",
	},
	{
		label: "Async/Await",
		icon: AiOutlineHourglass,
		description:
			"Embark on an async sea voyage with Await as your trusty hourglass companion!",
	},
	{
		label: "Dinamic Routing",
		icon: IoDiamond,
		description:
			"Trade static routes for dynamic journeys and explore new user territories!",
	},
	{
		label: "Styled Components",
		icon: SiStyledcomponents,
		description:
			"Embrace the magic wand of Styled Components and conjure bewitching styles!",
	},
	{
		label: "Private Routes",
		icon: GiLockedChest,
		description:
			"Safeguard your app with chests of private routes – only for those with keys!",
	},
	{
		label: "Memoization",
		icon: MdOutlineSailing,
		description:
			"Sharpen your aim with memoization arrows for swift and precise rendering!",
	},
	{
		label: "Optimizations",
		icon: GiPirateSkull,
		description:
			"Hoist the sails of optimization and sail toward a turbocharged user experience!",
	},
];

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get("category");
	const pathname = usePathname();
	const isMainPage = pathname === "/";

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div
				className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
			>
				{categories.map(({ label, icon }) => (
					<>
						<CategoryBox
							key={label}
							label={label}
							icon={icon}
							selected={category === label}
						/>
					</>
				))}
			</div>
		</Container>
	);
};

export default Categories;
