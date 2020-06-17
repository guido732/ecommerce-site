// React
import React from "react";
// Component
import CollectionPreview from "components/collection-preview/collection-preview.component";
// Styles
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</CollectionsOverviewContainer>
);

export default CollectionsOverview;
