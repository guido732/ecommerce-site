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
