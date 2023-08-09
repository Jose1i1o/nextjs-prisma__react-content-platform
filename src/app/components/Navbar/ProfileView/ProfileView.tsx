"use client";

import React, { FC, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import MenuItem from "../MenuItem/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

type ProfileViewProps = {
	currentUser?: User | null;
};

const ProfileView: FC<ProfileViewProps> = ({ currentUser }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const registerModal = useRegisterModal();
	const LoginModal = useLoginModal();

	const toogleOpenMenu = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
	}, []);

	return (
		<section className="relative">
			<div className="flex flex-row items-center gap-3">
				<div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full  transition cursor-pointer">
					Tu cuenta AIT
				</div>
				<div
					onClick={toogleOpenMenu}
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
						{currentUser ? (
							<>
								<MenuItem onClick={() => {}} label="My profile" />
								<MenuItem onClick={() => {}} label="My favourites" />
								<hr />
								<MenuItem onClick={() => signOut()} label="Logout" />
							</>
						) : (
							<>
								<MenuItem onClick={LoginModal.onOpen} label="Login" />
								<MenuItem onClick={registerModal.onOpen} label="Register" />
							</>
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default ProfileView;
