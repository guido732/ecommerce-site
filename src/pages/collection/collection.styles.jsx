import styled from "styled-components";
import CollectionItemContainer from "components/collection-item/collection-item.container";

export const StyledCollectionPage = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledCollectionTitle = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

export const StyledCollectionItems = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
`;

export const StyledCollectionItem = styled(CollectionItemContainer)`
	margin-bottom: 30px;
`;
