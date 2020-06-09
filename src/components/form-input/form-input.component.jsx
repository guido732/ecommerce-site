import React from "react";

import { GroupContainer, FormInputContainer, FormInputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => {
	console.log(props.value.length);

	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...props} />
			{label ? <FormInputLabel className={props.value.length ? "shrink" : ""}>{label}</FormInputLabel> : null}
		</GroupContainer>
	);
};

export default FormInput;
