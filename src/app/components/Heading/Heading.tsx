"use client";

type HeadingProps = {
	title: string;
	subtitle?: string;
	center?: boolean;
};

import React, { FC } from "react";

const Heading: FC<HeadingProps> = ({ title, subtitle, center = false }) => {
	return (
		<div
			className={`flex flex-col gap-4 ${center ? "text-center" : "text-start"}`}
		>
			<h3 className="text-2xl font-bold">{title}</h3>
			{subtitle && <h2 className="font-light text-neutral-500">{subtitle}</h2>}
		</div>
	);
};

export default Heading;
