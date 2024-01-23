// utils/renderComponent.js
import dynamic from "next/dynamic";

const EmptyState = dynamic(() => import("../components/Pages/EmptyState/EmptyState"));
const Bundlers = dynamic(() => import("../components/Pages/Bundlers/Bundlers"));
const Intro = dynamic(() => import("../components/Pages/Intro/Intro"));
// const UseState = dynamic(() => import("../components/Pages/UseState/UseState"));

// const PropDrilling = dynamic(
// 	() => import("../components/Pages/PropDrilling/PropDrilling")
// );

const renderComponent = (category: any, moduleInfo: any) => {
  switch (category) {
    case "Bundlers":
      return moduleInfo ? <Bundlers moduleInfo={moduleInfo} /> : null;
    case "Intro":
      return moduleInfo ? <Intro moduleInfo={moduleInfo} /> : null;
    default:
      return <EmptyState showReset />;
  }
};

export default renderComponent;

// case "useState":
// 				return <EmptyState showReset />;
// 				break;
// 			case "prop drilling":
// 				return <EmptyState showReset />;
// 				break;
// 			case "prevState":
// 				return <EmptyState showReset />;
// 				break;
// 			case "useEffect":
// 				return <EmptyState showReset />;
// 				break;
// 			case "conditionals":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Routing":
// 				return <EmptyState showReset />;
// 				break;
// 			case "useContext":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Forms":
// 				return <EmptyState showReset />;
// 				break;
// 			case "useReducer":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Async/Await":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Dinamic Routing":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Styled Components":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Private Routes":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Memoization":
// 				return <EmptyState showReset />;
// 				break;
// 			case "Optimizations":
// 				return <EmptyState showReset />;
// 				break;
