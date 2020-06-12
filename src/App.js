// React
import React from "react";
// Router
import { Switch, Route, Redirect } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selectors";
// Firebase
import { auth, createUserProfileDocument } from "firebase/firebase.utils";
// Components
import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import HeaderContainer from "components/header/header.container";
import SignInUpPage from "pages/sign-in-up/sign-in-up.component";
import CheckoutPageContainer from "pages/checkout/checkout.container";
// Styles
import "./App.css";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<HeaderContainer />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
					/>
					<Route exact path="/checkout" component={CheckoutPageContainer} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
