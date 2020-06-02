import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./stripe-form.component";

const stripePromise = loadStripe("pk_test_KhGwuHNvNEA4IuOOXX7OaR4T004q1T9Mvk");

const StripePayment = () => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};
export default StripePayment;
