// Rexux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";
import { signOutStart } from "redux/user/user.actions";
// Components
import { CheckoutForm } from "./stripe-form.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

const CheckoutFormContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CheckoutForm);

export { CheckoutFormContainer };
