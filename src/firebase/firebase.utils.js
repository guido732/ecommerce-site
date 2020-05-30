import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCV9a4mDcVjItvpEnmIgFm6qMP87-2amjs",
	authDomain: "react-ecommerce-3b8b6.firebaseapp.com",
	databaseURL: "https://react-ecommerce-3b8b6.firebaseio.com",
	projectId: "react-ecommerce-3b8b6",
	storageBucket: "react-ecommerce-3b8b6.appspot.com",
	messagingSenderId: "939227610478",
	appId: "1:939227610478:web:4ecad4f43613a5e959d57f",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	// console.log(snapShot);
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log("error creating user", e.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
