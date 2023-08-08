"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Search = (props: Props) => {
	return (
		<div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
			<div className="flex flex-row items-center justify-between">
				<div className="text-sm font-semibold px-6">Search</div>
				<div className="p-2 mr-1 bg-rose-500 rounded-full text-white text-sm">
					<BiSearch size={18} />
				</div>
			</div>
		</div>
	);
};

export default Search;
