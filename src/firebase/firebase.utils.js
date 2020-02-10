import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB4gDvE6SAA5SDSK25KTEuBle5Ek5lgqh4",
	authDomain: "react-ecommerce-6a2e5.firebaseapp.com",
	databaseURL: "https://react-ecommerce-6a2e5.firebaseio.com",
	projectId: "react-ecommerce-6a2e5",
	storageBucket: "react-ecommerce-6a2e5.appspot.com",
	messagingSenderId: "446623133293",
	appId: "1:446623133293:web:2f70dcde759f775a8d5964",
	measurementId: "G-JT6HSD64WF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
