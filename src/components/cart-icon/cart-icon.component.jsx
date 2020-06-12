// React
import React from "react";
// Styles
import { CartIconContainer, ShoppingIcon, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartIconContainer>
);

export default CartIcon;
