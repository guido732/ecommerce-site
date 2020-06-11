import { firestore, convertCollectionsSnapshotToMap } from "firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLETIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLETIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLETIONS_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsStart());
		try {
			collectionRef.get().then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			});
		} catch (error) {
			dispatch(fetchCollectionsFailure(error.message));
		}
	};
};

// Observable Pattern connection
// collectionRef.onSnapshot(async (snapshot) => {
// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// 	updateCollections(collectionsMap);
// 	this.setState({ loading: false });
// });

// Promise based connection
// collectionRef.get().then((snapshot) => {
// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// 	updateCollections(collectionsMap);
// 	this.setState({ loading: false });
// });
