// Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal, selectCartItemsCount } from "redux/cart/cart.selectors";
// Components
import Checkout from "./checkout.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	cartItemsCount: selectCartItemsCount,
});

const CheckoutContainer = compose(connect(mapStateToProps))(Checkout);

export default CheckoutContainer;
