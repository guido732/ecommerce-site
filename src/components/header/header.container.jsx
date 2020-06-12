// Rexux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "redux/cart/cart.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
// Components
import Header from "./header.component";

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const HeaderContainer = compose(connect(mapStateToProps))(Header);

export default HeaderContainer;
