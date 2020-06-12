import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
	StyledCollectionItem,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<StyledCollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
