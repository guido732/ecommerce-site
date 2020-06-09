import React from "react";
// Custom Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// Firebase
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// Styles
import { SignInContainer, ButtonsBarContainer, SignInTitle } from "./sign-in.styles";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (e) {
			console.error(e);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label="Email"
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						handleChange={this.handleChange}
						label="Password"
					/>
					<ButtonsBarContainer>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
