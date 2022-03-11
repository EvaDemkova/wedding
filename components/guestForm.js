import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Box, Button, Grid, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import TextField from "./inputs/textField";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from './inputs/select'

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "green",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "green",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "red",
		},
		"&:hover fieldset": {
			borderColor: "yellow",
		},
		"&.Mui-focused fieldset": {
			borderColor: "green",
		},
	},
});

const GuestForm = ({ move, swap, push, insert, unshift, pop, form }) => {
	const { values } = form;

	return (
		<Form>
			<FieldArray
				name="guests"
				render={(arrayHelpers) => (
					<Box sx={{ p: 6 }}>
						{values.guests.map((guest, index) => (
							<Paper sx={{ p: 4, m: 2 }} key={index}>
								{/* <Field component={CssTextField} name={`guests[${index}].name_surname`} id="name_surname" label="Meno a priezvisko" variant="outlined"  size="small"  color="secondary"/> */}
								<Field
									component={TextField}
									name={`guests.${index}.name`}
									id={`id_name_${index}`}
								/>

								<Field
									component={Select}
									name={`guests.${index}.name`}
									id={`id_name_${index}`}
								/>
								<Button
									style={{ padding: "6px 8px 6px 13px", minWidth: "38px" }}
									variant="outlined"
									startIcon={
										<DeleteIcon style={{ marginRight: "0px !important" }} />
									}
									onClick={() => arrayHelpers.remove(index)}></Button>
							</Paper>
						))}

						<Button
							variant="contained"
							onClick={() => arrayHelpers.push({ name: "", age: "" })}>
							Pridať ďaľšieho hosťa
						</Button>

						<div>
							<button type="submit">Submit</button>
						</div>
					</Box>
				)}
			/>
		</Form>
	);
};

export default GuestForm;
