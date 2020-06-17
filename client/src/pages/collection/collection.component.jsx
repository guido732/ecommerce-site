import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shop.selectors";

import {
	StyledCollectionPage,
	StyledCollectionTitle,
	StyledCollectionItems,
	StyledCollectionItem,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;

	return (
		<StyledCollectionPage>
			<StyledCollectionTitle>{title}</StyledCollectionTitle>
			<StyledCollectionItems>
				{items.map((item) => (
					<StyledCollectionItem key={item.id} item={item} />
				))}
			</StyledCollectionItems>
		</StyledCollectionPage>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
