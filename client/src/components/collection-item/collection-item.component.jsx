// React
import React from "react";
// Styles
import {
	StyledCollectionItem,
	StyledBackgroundImage,
	StyledCollectionFooter,
	StyledName,
	StyledPrice,
	StyledAddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<StyledCollectionItem>
			<StyledBackgroundImage imageUrl={imageUrl} />
			<StyledCollectionFooter>
				<StyledName>{name}</StyledName>
				<StyledPrice>{price}</StyledPrice>
			</StyledCollectionFooter>
			<StyledAddButton inverted onClick={() => addItem(item)}>
				Add to cart
			</StyledAddButton>
		</StyledCollectionItem>
	);
};

export default CollectionItem;
