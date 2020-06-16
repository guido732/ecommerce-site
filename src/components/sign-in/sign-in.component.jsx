// React
import React, { useState } from "react";
// Custom Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// Styles
import { SignInContainer, ButtonsBarContainer, SignInTitle } from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
	const { email, password } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput name="email" type="email" value={email} required handleChange={handleChange} label="Email" />
				<FormInput
					name="password"
					type="password"
					value={password}
					required
					handleChange={handleChange}
					label="Password"
				/>
				<ButtonsBarContainer>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
