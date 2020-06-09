import React from "react";
import { withRouter } from "react-router-dom";

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	const handleClick = () => {
		history.push(`${match.url}${linkUrl}`);
	};
	return (
		<MenuItemContainer size={size} onClick={handleClick}>
			<BackgroundImageContainer imageUrl={imageUrl} />
			<ContentContainer>
				<ContentTitle>{title.toUpperCase()}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};
export default withRouter(MenuItem);
