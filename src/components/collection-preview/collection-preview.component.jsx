import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItemContainer from "components/collection-item/collection-item.container";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
	const handleClick = () => {
		history.push(`${match.path}/${routeName}`);
	};
	return (
		<CollectionPreviewContainer>
			<TitleContainer onClick={handleClick}>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItemContainer key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
