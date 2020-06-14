// React
import React from "react";
// Router
import { Switch, Route, Redirect } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/user.selectors";
import { checkUserSession } from "redux/user/user.actions";
// Components
import HomePage from "pages/homepage/homepage.component";
import ShopPageContainer from "pages/shop/shop.container";
import HeaderContainer from "components/header/header.container";
import SignInUpPage from "pages/sign-in-up/sign-in-up.component";
import CheckoutPageContainer from "pages/checkout/checkout.container";
// Styles
import "./App.css";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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
					<Route path="/shop" component={ShopPageContainer} />
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
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
