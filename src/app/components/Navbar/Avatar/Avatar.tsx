"use client";
import React, { FC } from "react";

import Image from "next/image";

type AvatarProps = {
	src?: string | null | undefined;
};

const Avatar: FC<AvatarProps> = ({ src }) => {
	return (
		<Image
			className="rounded-full"
			height={40}
			width={40}
			src={src || "/avatar.jpeg"}
			alt="Avatar"
		/>
	);
};

export default Avatar;
