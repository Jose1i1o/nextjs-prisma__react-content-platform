"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import Heading from "../../Heading/Heading";
import Button from "../../shared/Button/Button";

type EmptyStateProps = {
	title?: string;
	subtitle?: string;
	showReset?: boolean;
};

const EmptyState: FC<EmptyStateProps> = ({
	title = "Welcome to AIT DOCS",
	subtitle = "This category will be available in the near future. Please choose a category to proceed.",
	showReset,
}) => {
	const router = useRouter();
	return (
		<div
			className="
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
		>
			<Heading center title={title} subtitle={subtitle} />
			<div className="w-48 mt-4">
				{showReset && (
					<Button
						outline
						label="Remove all filters"
						onClick={() => router.push("/")}
					/>
				)}
			</div>
		</div>
	);
};

export default EmptyState;
