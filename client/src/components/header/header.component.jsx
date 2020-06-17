// React
import React from "react";
// Components
import CartIconContainer from "../cart-icon/cart-icon.container";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";
// Styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";
// Assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/" className="logo-container">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIconContainer />
		</OptionsContainer>
		{hidden ? null : <CartDropdownContainer />}
	</HeaderContainer>
);

export default Header;
