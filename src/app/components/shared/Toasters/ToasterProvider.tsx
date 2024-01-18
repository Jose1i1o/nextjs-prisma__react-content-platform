"use client";

import { Toaster } from "sonner";

const ToasterProvider = () => {
	return <Toaster position="top-right" expand={ false } richColors />;
};

export default ToasterProvider;
