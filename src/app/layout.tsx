import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modal/RegisterModal";
import ToasterProvider from "./components/shared/Toasters/ToasterProvider";
import LoginModal from "./components/Modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { Providers } from "./providers";
import { theme } from "@/theme/theme";

export const metadata: Metadata = {
	title: "AIT Documentation",
	description: "Generated by create next app",
};

const font = Nunito({
	subsets: ["latin"],
});

const customBackground = '';


export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={''}>
				<Providers>
					<ClientOnly>
						<ToasterProvider />
						<RegisterModal />
						<LoginModal />
						<Navbar currentUser={currentUser} />
					</ClientOnly>
				</Providers>
				<div className="mt-5 pt-5">{children}</div>
			</body>
		</html>
	);
}
