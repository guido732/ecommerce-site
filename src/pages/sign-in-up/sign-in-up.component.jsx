import React from "react";
import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUpContainer from "../../components/sign-up/sign-up.container";

import { SignInUpContainer } from "./sign-in-up.styles";

const SignInUpPage = () => (
	<SignInUpContainer>
		<SignInContainer />
		<SignUpContainer />
	</SignInUpContainer>
);

export default SignInUpPage;
