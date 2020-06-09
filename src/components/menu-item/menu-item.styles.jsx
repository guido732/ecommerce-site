import styled from "styled-components";

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? "380px" : "240px")};
	min-width: 30%;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	text-align: center;
	position: relative;
	overflow: hidden;
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}
	&:hover {
		cursor: pointer;
		& div:first-child {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& div:last-child {
			opacity: 0.9;
			transition: 1s ease;
		}
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	transition: 0.5s ease-out;
`;

export const ContentTitle = styled.h1`
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
