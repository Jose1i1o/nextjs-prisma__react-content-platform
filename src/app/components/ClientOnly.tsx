"use client";

import React, { useState, useEffect, ReactNode, FC } from "react";

type ClientOnlyProps = {
	children: ReactNode;
};

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <>{children}</>;
};

export default ClientOnly;
