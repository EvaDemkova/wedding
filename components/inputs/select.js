import React, { useState } from "react";
import {
	FormControl,
	Select,
	InputLabel,
	FormLabel,
	MenuItem,
	FormHelperText,
} from "@mui/material";
import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";


const select = ({field, id}) => {
	const formik = useFormikContext();
	const { setFieldValue } = formik;

	const handleChange = (e) => {};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
			<FormLabel sx={{ minWidth: 200 }}>Preferovaný typ alkoholu</FormLabel>
			<Select
				labelId="demo-simple-select-standard-label"
				id={id}
				//   value={age}
				onChange={handleChange}
				//   label="Age"
				name={field.name}
				sx={{ minWidth: 200 }}>
                
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
			{/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
		</FormControl>
	);
};

export default select;
