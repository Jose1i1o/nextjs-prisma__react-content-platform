"use client";
import React, { FC } from "react";
import Image from "next/legacy/image";

type AvatarProps = {
	src?: string | null | undefined;
};

const Avatar: FC<AvatarProps> = ({ src }) => {
	return (
		<Image
			className="rounded-full"
			height={40}
			width={40}
			src={src || "/images/avatar.jpeg"}
			alt="Avatar"
		/>
	);
};

export default Avatar;
