import styled from "styled-components";
import CustomButton from "components/custom-button/custom-button.component";

export const StripeFormContainer = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.StripeElement {
		flex-shrink: 0;
		box-sizing: border-box;
		height: 40px;
		padding: 10px 12px;
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: white;
		box-shadow: 0 1px 3px 0 #e6ebf1;
		-webkit-transition: box-shadow 150ms ease;
		transition: box-shadow 150ms ease;
		&--focus {
			box-shadow: 0 1px 3px 0 #cfd7df;
		}
		&--invalid {
			border-color: #fa755a;
		}
		&--webkit-autofill {
			background-color: #fefde5 !important;
		}
	}
`;

export const StripeFormRow = styled.div`
	width: 100%;
`;

export const StripeFormSubmit = styled(CustomButton)`
	margin: 0 auto;
	margin-top: 1.5rem;
	text-align: center;
`;
