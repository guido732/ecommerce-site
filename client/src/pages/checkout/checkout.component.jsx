// React
import React from "react";
// Components
import CheckoutItemContainer from "components/checkout-item/checkout-item.container";
import StripePayment from "components/stripe-payment/stripe-payment.component";
// Styles
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
	StyledEmptyCartWarning,
} from "./checkout.styles";

const headerBlock = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total, cartItemsCount }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			{headerBlock.map((el, index) => (
				<HeaderBlockContainer key={index}>
					<span>{el}</span>
				</HeaderBlockContainer>
			))}
		</CheckoutHeaderContainer>
		{cartItems.map((cartItem) => (
			<CheckoutItemContainer cartItem={cartItem} key={cartItem.id} />
		))}
		{cartItemsCount ? (
			<>
				<TotalContainer>
					<span>TOTAL: ${total}</span>
				</TotalContainer>
				<WarningContainer>
					Please use the following CC to test payments
					<br />
					4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
				</WarningContainer>
				<StripePayment price={total} />
			</>
		) : (
			<StyledEmptyCartWarning>Add a product to the cart to see them reflected here</StyledEmptyCartWarning>
		)}
	</CheckoutPageContainer>
);

export default CheckoutPage;
