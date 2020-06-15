// Rexux
import { compose } from "redux";
import { connect } from "react-redux";
import { signUpStart } from "redux/user/user.actions";
// Components
import SignUp from "./sign-up.component";

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

const SignUpContainer = compose(connect(null, mapDispatchToProps))(SignUp);

export default SignUpContainer;
