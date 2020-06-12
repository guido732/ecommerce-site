// Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors";
// Components
import Checkout from "./checkout.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

const CheckoutContainer = compose(connect(mapStateToProps))(Checkout);

export default CheckoutContainer;
