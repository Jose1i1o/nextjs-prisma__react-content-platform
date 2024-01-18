"use client";

import axios from "axios";

import React, { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading/Heading";
import Input from "../shared/Inputs/Input";
import { toast } from "sonner";
import Button from "../shared/Button/Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = useCallback(
		async (data) => {
			setIsLoading(true);
			try {
				await axios.post("/api/register", data);
				registerModal.onClose();
			} catch (error) {
				toast.error("Something went wrong, please try again later.");
			}
			setIsLoading(false);
		},
		[registerModal]
	);

	const toogle = useCallback(() => {
		registerModal.onClose();
		registerModal.onOpen();
	}, [registerModal, registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading
				title="Welcome to AIT docs"
				subtitle="Register to continue"
				center
			/>
			<Input
				id="name"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<hr />
			<Button
				outline
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => signIn("google")}
			/>
			<Button
				outline
				label="Continue with Github"
				icon={AiFillGithub}
				onClick={() => signIn("github")}
			/>
			<div
				className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
			>
				<p>
					Already have an account?
					<span
						onClick={toogle}
						className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
					>
						{" "}
						Log in
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<>
			<Modal
				disabled={isLoading}
				isOpen={registerModal.isOpen}
				onClose={registerModal.onClose}
				title="Register"
				actionLabel="Continue"
				onSubmit={handleSubmit(onSubmit)}
				body={bodyContent}
				footer={footerContent}
			/>
		</>
	);
};

export default RegisterModal;
