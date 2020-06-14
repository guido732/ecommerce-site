import React from "react";
import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInUpContainer } from "./sign-in-up.styles";

const SignInUpPage = () => (
	<SignInUpContainer>
		<SignInContainer />
		<SignUp />
	</SignInUpContainer>
);

export default SignInUpPage;
