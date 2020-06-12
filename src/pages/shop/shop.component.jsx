// React
import React from "react";
// Router
import { Route } from "react-router-dom";
// Components
import CollectionsOverviewContainer from "components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "pages/collection/collection.container";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}
	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
			</div>
		);
	}
}

export default ShopPage;
