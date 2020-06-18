// Rexux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount } from "redux/cart/cart.selectors";
// Components
import { CheckoutForm } from "./stripe-form.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartItemsCount: selectCartItemsCount,
});

const CheckoutFormContainer = compose(connect(mapStateToProps))(CheckoutForm);

export { CheckoutFormContainer };
