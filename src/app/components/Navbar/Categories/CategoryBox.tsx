"use client";

import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
	icon: IconType;
	label: string;
	selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
	icon: Icon,
	label,
	selected,
}) => {
	const router = useRouter();
	const params = useSearchParams();
	const iconClass = selected ? "text-rose-600" : "text-neutral-500";
	const iconHoverClass = "hover:text-rose-600";

	const handleClick = useCallback(() => {
		let currentQuery = {};

		if (params) {
			currentQuery = queryString.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			category: label,
		};

		if (params?.get("category") === label) {
			delete updatedQuery.category;
		}

		const url = queryString.stringifyUrl(
			{
				url: "/",
				query: updatedQuery,
			},
			{ skipNull: true } // skipNull: true removes the category query param if it's null
		);

		router.push(url);
	}, [label, router, params]);

	return (
		<div
			onClick={handleClick}
			className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
    hover:text-neutral-900
    transition
    cursor-pointer
    ${selected ? "border-rose-600" : "border-transparent"}
    ${selected ? "border-rose-600" : "text-neutral-500"}
		${iconHoverClass ? iconHoverClass : "hover:text-rose-600"}
  `}
		>
			<Icon size={26} className={`mx-auto ${iconClass} ${iconHoverClass}`} />
			<div className={`font-medium text-sm mx-auto text-center ${iconClass} ${iconHoverClass}`}>{label}</div>
		</div>
	);
};

export default CategoryBox;
