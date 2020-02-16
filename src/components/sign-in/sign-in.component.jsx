import React from "react";
// Custom Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
// Firebase
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// Styles
import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (e) {
			console.error(e);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
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
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;