// React
import React, { useEffect } from "react";
// Router
import { Route } from "react-router-dom";
// Components
import CollectionsOverviewContainer from "components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "pages/collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
		</div>
	);
};

export default ShopPage;
