import { UserActionTypes } from "./user.types";

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (payload) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: payload,
});

export const signInSuccess = (payload) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: payload,
});

export const signInFailure = (payload) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: payload,
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
});
