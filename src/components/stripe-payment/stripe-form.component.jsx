import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./stripe-form.styles.scss";

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: "#32325d",
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: "antialiased",
			fontSize: "16px",
			"::placeholder": {
				color: "#aab7c4",
			},
		},
		invalid: {
			color: "#fa755a",
			iconColor: "#fa755a",
		},
	},
};

const CheckoutForm = () => {
	const [error, setError] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	// Error Validations
	const handleChange = (event) => {
		if (event.error) {
			setError(event.error.message);
		} else {
			setError(null);
		}
	};

	// Form submission.
	const handleSubmit = async (event) => {
		event.preventDefault();
		const card = elements.getElement(CardElement);
		const result = await stripe.createToken(card);
		if (result.error) {
			setError(result.error.message);
		} else {
			setError(null);
			stripeTokenHandler(result.token);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="stripe-form">
			<div className="form-row">
				<label htmlFor="card-element">Credit or debit card</label>
				<CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
				<div className="card-errors" role="alert">
					{error}
				</div>
			</div>
			<button type="submit">Submit Payment</button>
		</form>
	);
};

export { CheckoutForm };

async function stripeTokenHandler(token) {
	// const response = await fetch("/charge", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify({ token: token.id }),
	// });

	// return response.json();
	alert("payment submitted", token);
}
