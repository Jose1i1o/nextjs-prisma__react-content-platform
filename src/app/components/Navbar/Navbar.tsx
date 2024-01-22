"use client";

import React, { FC, useEffect } from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
// import Search from "./Search/Search";
import ProfileView from "./ProfileView/ProfileView";
import { SafeUser } from "@/app/types";
import Categories from "./Categories/Categories";
import { useUserStore } from "@/app/context/store";

type NavbarProps = {
	currentuser?: SafeUser | null;
};

const Navbar: FC<NavbarProps> = ({ currentuser }) => {

	const { setCurrentUser } = useUserStore();

	useEffect(() => {
		if (currentuser !== undefined || currentuser !== null) {
			setCurrentUser(currentuser)
		}
		return () => {
			setCurrentUser(null)
		}
	}, [currentuser]);

	return (
		<nav className="relative w-full h-lvh bg-white z-10 shadow-sm max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
			<div className="py-4 border-b-[1px]">
				{/* <Container> */}
					<div className="flex flex-row justify-between items-center gap-3 md:gap-0">
						<Logo />
						{/* <Search /> */}
						<ProfileView currentuser={currentuser} />
					</div>
				{/* </Container> */}
			</div>
			<Categories />
		</nav>
	);
};

export default Navbar;
