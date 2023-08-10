"use client";
import React from "react";

import Image from "next/image";

type Props = {};

const Avatar = (props: Props) => {
	return (
		<Image
			className="rounded-full"
			height={40}
			width={40}
			src="/images/avatar.jpeg"
			alt="Avatar"
		/>
	);
};

export default Avatar;
