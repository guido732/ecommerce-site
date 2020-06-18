const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin");

// Env for development
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
// Firebase ServiceAccount import
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
	? JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, "base64").toString("ascii"))
	: require("./service-account.json");
// Stripe Key import
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// Server config
const app = express();
const port = process.env.PORT || 5000;
// Middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }), cors());
// Get firebase data to calculate order totals
let data;
getFirebaseCollections();
// File serving on production enviroment
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
	if (total) {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: "usd",
		});
		res.send({ clientSecret: paymentIntent.client_secret });
	} else {
		res.send({ clientSecret: undefined });
	}
});

function calculateOrderAmount(items) {
	const orderTotal = items.reduce((accum, currVal) => {
		const foundItem = data.find((collectionItem) => collectionItem.id === currVal.id);
		accum += foundItem.price * currVal.quantity;
		return accum;
	}, 0);
	return orderTotal * 100;
}

async function getFirebaseCollections() {
	const collections = [];

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
	const db = admin.firestore();
	try {
		const collectionsRef = await db.collection("collections").get();
		collectionsRef.forEach((doc) => {
			doc.data().items.forEach((item) => collections.push(item));
		});
	} catch (error) {
		console.log(error);
	}
	data = collections;
}
