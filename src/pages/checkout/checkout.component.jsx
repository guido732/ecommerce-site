import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "components/checkout-item/checkout-item.component";
import StripePayment from "components/stripe-payment/stripe-payment.component";

import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors";

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
} from "./checkout.styles";

const headerBlock = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			{headerBlock.map((el, index) => (
				<HeaderBlockContainer key={index}>
					<span>{el}</span>
				</HeaderBlockContainer>
			))}
		</CheckoutHeaderContainer>
		{cartItems.map((cartItem) => (
			<CheckoutItem cartItem={cartItem} key={cartItem.id} />
		))}
		<TotalContainer>
			<span>TOTAL: ${total}</span>
		</TotalContainer>
		<WarningContainer>
			Please use the following CC to test payments
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</WarningContainer>
		<StripePayment price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
