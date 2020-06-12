// Router
import { withRouter } from "react-router-dom";
// Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";
// Components
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const CartDropdownContainer = compose(withRouter, connect(mapStateToProps))(CartDropdown);

export default CartDropdownContainer;
