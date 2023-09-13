"use client";

import React, { FC } from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
// import Search from "./Search/Search";
import ProfileView from "./ProfileView/ProfileView";
import { SafeUser } from "@/app/types";
import Categories from "./Categories/Categories";

type NavbarProps = {
	currentUser?: SafeUser | null;
};

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
	return (
		<nav className="relative w-full bg-white z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row justify-between items-center gap-3 md:gap-0">
						<Logo />
						{/* <Search /> */}
						<ProfileView currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</nav>
	);
};

export default Navbar;
