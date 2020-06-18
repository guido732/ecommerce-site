import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { StripeFormContainer, StripeFormSubmit, StripeFormRow } from "./stripe-form.styles";

// Custom styling can be passed to options when creating an Element.
const cardStyle = {
	style: {
		base: {
			color: "#32325d",
			fontFamily: '"Helvetica Neue", Helvetica, Roboto, sans-serif',
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

const CheckoutForm = ({ cartItems, cartItemsCount }) => {
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [formComplete, setFormComplete] = useState(false);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	// Move to sagas
	useEffect(() => {
		const fetchPaymentIntent = async () => {
			const res = await fetch("/payment-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ items: cartItems }),
			});
			const resData = await res.json();
			setClientSecret(resData.clientSecret);
		};
		fetchPaymentIntent();
	}, [cartItems]);

	// Error Validations
	const handleChange = (event) => {
		setFormComplete(event.complete);
		setError(event.error ? event.error.message : "");
	};

	useEffect(() => {
		if (formComplete && cartItemsCount !== 0 && !processing) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [formComplete, setDisabled, cartItemsCount]);

	// Form submission.
	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: event.target.name.value,
				},
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};

	return (
		<StripeFormContainer onSubmit={handleSubmit}>
			<StripeFormRow>
				<label htmlFor="card-element">Credit or debit card</label>
				<CardElement id="card-element" options={cardStyle} onChange={handleChange} />
				{error && (
					<div className="card-errors" role="alert">
						{error}
					</div>
				)}
				{succeeded && (
					<p className={succeeded ? "result-message" : "result-message hidden"}>
						Payment succeeded, see the result in your
						<a href={`https://dashboard.stripe.com/test/payments`}> Stripe dashboard.</a> Refresh the page to pay again.
					</p>
				)}
			</StripeFormRow>
			<StripeFormSubmit disabled={disabled} type="submit">
				Submit Payment
			</StripeFormSubmit>
		</StripeFormContainer>
	);
};

export { CheckoutForm };
