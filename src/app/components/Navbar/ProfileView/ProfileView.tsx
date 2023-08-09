"use client";

import React, { useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import MenuItem from "../MenuItem/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

type Props = {};

const ProfileView = (props: Props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const registerModal = useRegisterModal();

	const toogleOpenMenu = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
	}, []);

	return (
		<section className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toogleOpenMenu}
					className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
				>
					Settings
				</div>
				<div
					onClick={() => {}}
					className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full transition cursor-pointer"
				>
					<AiOutlineMenu size={20} />
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-10 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						<>
							<MenuItem onClick={registerModal.onOpen} label="Login" />
							<MenuItem onClick={() => {}} label="Account" />
						</>
					</div>
				</div>
			)}
		</section>
	);
};

export default ProfileView;
