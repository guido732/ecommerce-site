import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutFormContainer } from "components/stripe-form/stripe-form.container";

const stripePromise = loadStripe("pk_test_KhGwuHNvNEA4IuOOXX7OaR4T004q1T9Mvk");

const StripePayment = () => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutFormContainer />
		</Elements>
	);
};
export default StripePayment;
