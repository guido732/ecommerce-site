import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "components/checkout-item/checkout-item.component";
import StripePayment from "components/stripe-payment/stripe-payment.component";

import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors";

import "./checkout.styles.scss";

const headerBlock = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			{headerBlock.map((el, index) => (
				<div className="header-block" key={index}>
					<span>{el}</span>
				</div>
			))}
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem cartItem={cartItem} key={cartItem.id} />
		))}
		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>
		<div className="test-warning">
			Please use the following CC to test payments
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripePayment />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
