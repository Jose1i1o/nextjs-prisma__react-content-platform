"use client";

import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import ProfileView from "./ProfileView/ProfileView";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className="fixed w-full bg-white z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row justify-between items-center gap-3 md:gap-0">
						<Logo />
						<Search />
						<ProfileView />
					</div>
				</Container>
			</div>
		</nav>
	);
};

export default Navbar;
