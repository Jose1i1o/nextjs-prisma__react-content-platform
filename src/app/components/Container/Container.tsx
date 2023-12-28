"use client";

import React, { FC } from "react";

type ContainerProps = {
	children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<section className="max-w-[2520px] mx-auto h-full">
			{children}
		</section>
	);
};

export default Container;
