const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Env for development
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Server config
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, (error) => {
	if (error) {
		throw error;
	} else {
		console.log("Server running on port " + port);
	}
});

app.post("/payment-intent", async (req, res) => {
	const { items } = req.body;
	const total = calculateOrderAmount(items);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	res.send({ clientSecret: paymentIntent.client_secret });
});

function calculateOrderAmount(items) {
	console.log(items);
	return 1000;
}
