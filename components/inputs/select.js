import React, { useState } from "react";
import {
	FormControl,
	Select,
	InputLabel,
	FormLabel,
	MenuItem,
	FormHelperText,
} from "@mui/material";

import { Formik, Form, Field, FieldArray, useFormikContext, ErrorMessage, getIn } from "formik";
import { alpha, styled } from "@mui/material/styles";

const select = ({ form, field, id, label, value, options }) => {
	const { setFieldValue, handleChange, errors } = form;

  console.log(errors)
  

	const CssSelect = styled(Select)({
		"&:hover:not(.Mui-disabled):before": {
			borderBottom: "2px solid white",
		},
		"&:after": {
			borderBottom: "1px solid black",
		},
		"&": {
			marginTop: "10px !important",
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "black",
		},
	});
	const CssLabel = styled(FormLabel)({
		"&.Mui-focused": {
			color: "black",
		},
		"&": {
			color: "black",
			fontWeight: "600",
			fontStyle: "italic",
		},
	});

	return (
		<FormControl
			variant="outlined"
			size="small"
			sx={{ m: "8px 8px 2px 8px", minWidth: "50%", justifyContent: "space-between" }}>
			<CssLabel sx={{ minWidth: 200 }}>{label}</CssLabel>
			<CssSelect
				labelId="demo-simple-select-standard-label"
				id={id}
				//   value={age}
				onChange={handleChange}
				//   label="Age"
				name={field.name}
				sx={{ mt: 1 }}
				value={value}
				error={getIn(form.errors, field.name) && getIn(form.touched, field.name)}        
        >
				{options.map((opt, i) => {
					return (
						<MenuItem key={i} value={opt.value}>
							{opt.label}
						</MenuItem>
					);
				})}
			</CssSelect>
			<ErrorMessage component="div" name={field.name} style={{ color: '#cc0000' }}/>
		</FormControl>
	);
};

export default select;
