import React from "react";
import { Formik, Form, Field, FieldArray, getIn } from "formik";
import {
	Stack,
	Box,
	Button,
	Grid,
	Paper,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Radio,
	RadioGroup,
	FormLabel,
	FormControl,
	Divider,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import TextField from "./inputs/textField";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "./inputs/select";
import Radios from "./inputs/radios";
import styles from "../styles/components/GuestForm.module.scss";

const GuestForm = ({ move, swap, push, insert, unshift, pop, form }) => {
	const { values } = form;

	const CssButton = styled(Button)({
		"&": {
			padding: "6px 8px 6px 13px",
			minWidth: "38px",
			height: "38px",
			border: "1px solid #cc0000",
			color: "#cc0000",
		},
		"&:hover": {
			backgroundColor: "#f0dede",
			borderColor: "#cc0000"
		}
	});

	const AddButton = styled(Button)({
		backgroundColor: "#0D4B1E",
		color: "white",
		fontWeight: "bold",
		opacity: "0",
		// "&": {
		// 	// padding: "6px 8px 6px 13px",
		// 	// minWidth: "38px",
		// 	// height: "38px",
		// 	backgroundColor: "#000000",
		// 	color: "#cc0000",
		// },
		"&:hover": {
			backgroundColor: "#2d8c7c"
		}
	});

	return (
		<Form>
			<FieldArray
				name="guests"
				render={(arrayHelpers, onChange) => (
					<Box
						sx={{
							p: {
								xs: 0,
								md: 4,
							},
							my: {
								xs: 0,
								md: 2,
							},
							backgroundColor: "transparent",
						}}>
						{values.guests.map((guest, index) => (
							<Stack
								sx={{
									p: {
										xs: 2,
										lg: 5,
										xl: 7,
									},
									m: {
										xs: 1,
										lg: 3,
										xl: 5,
									},
									mb: 4,
									boxShadow: "0 1px 1px 0 #6e6e6e",
									borderRadius: "5px",
									backgroundColor: "#e3e3e3",
									opacity: "0.8",
								}}
								key={index}>
								<Stack
									direction={"row"}
									justifyContent={"space-between"}
									alignItems={"center"}
									sx={{ mx: 1 }}>
									<h3 className={styles.heading}>Hosť {index + 1}</h3>
									<CssButton
										style={{}}
										variant="outlined"
										onClick={() => arrayHelpers.remove(index)}>
										Odstrániť hosťa
									</CssButton>
								</Stack>
								{/* <Field component={sTextField} name={`guests[${index}].name_surname`} id="name_surname" label="Meno a priezvisko" variant="outlined"  size="small"  color="secondary"/> */}
								<Stack>
									<Field
										component={TextField}
										name={`guests.${index}.name`}
										id={`id_name_${index}`}
										label="Meno a priezvisko"
										value={getIn(values, `guests.${index}.name`)}
										onChange={onChange}
									/>
								</Stack>
								<Stack
									direction={{ xs: "column", md: "row" }}
									justifyContent={"space-between"}>
									<Field
										component={Select}
										name={`guests.${index}.alcohol`}
										id={`id_name_${index}`}
										label="Preferovaný typ alkoholu"
										value={getIn(values, `guests.${index}.alcohol`)}
										options={[
											{
												label: "Borovička",
												value: "borovička",
											},
											{
												label: "Domáca",
												value: "domáca",
											},
											{
												label: "Víno",
												value: "víno",
											},
											{
												label: "Pivo",
												value: "pivo",
											},
											{
												label: "Iné",
												value: "iné",
											},
											{
												label: "Nebudem piť alkohol",
												value: "nebudem piť alkohol",
											},
										]}
									/>

									<Field
										component={TextField}
										name={`guests.${index}.otherAlcohol`}
										id={`id_otherAlcohol_${index}`}
										label="Iný alkohol"
										disabled={
											getIn(values, `guests.${index}.alcohol`) !== "iné"
										}
										value={getIn(values, `guests.${index}.otherAlcohol`)}
									/>
								</Stack>
								<Stack
									direction={{ xs: "column", md: "row" }}
									justifyContent={"space-between"}>
									<Field
										component={Select}
										name={`guests.${index}.foodAlergy`}
										id={`id_name_${index}`}
										label="Potravinové alergie"
										value={getIn(values, `guests.${index}.foodAlergy`)}
										options={[
											{
												label: "Alergia na orechy",
												value: "Alergia na orechy",
											},
											{
												label: "Alergia na lepok",
												value: "Alergia na lepok",
											},
											{
												label: "Alergia na ryby",
												value: "Alergia na ryby",
											},
											{
												label: "Vegetariánska diéta",
												value: "vegetarián",
											},
											{
												label: "Vegánska diéta",
												value: "vegán",
											},
											{
												label: "Iné",
												value: "iné",
											},
											{
												label: "Žiadne",
												value: "žiadne",
											},
										]}
									/>
									<Field
										component={TextField}
										name={`guests.${index}.otherAlergy`}
										id={`id_otherAlergy_${index}`}
										label="Iné potravinové alergie"
										disabled={
											getIn(values, `guests.${index}.foodAlergy`) !== "iné"
										}
										value={getIn(values, `guests.${index}.otherAlergy`)}
									/>
								</Stack>
								<Field
									component={Radios}
									name={`guests.${index}.accomodation`}
									id={`id_accomodation_${index}`}
									label="Budeš chcieť zarezervovať ubytovanie?"
									value={getIn(values, `guests.${index}.accomodation`)}
								/>
								<Field
									component={TextField}
									name={`guests.${index}.note`}
									id={`id_note_${index}`}
									label="Poznámka"
									value={getIn(values, `guests.${index}.note`)}
									variant="outlined"
									minRows={3}
									multiline={true}
									placeholder="Chcete nám nechať ešte nejakú poznámku?"
								/>
							</Stack>
						))}

						<Stack
							direction={{ xs: "column", md: "row" }}
							justifyContent={`${
								values.guests.length === 0 ? "center" : "space-between"
							}`}
							sx={{
								px: {
									lg: 2,
								},
								m: 1,
								my: 4,
							}}
							spacing={2}>
							<AddButton
								style={{opacity: "1"}}
								variant="contained"
								onClick={() =>
									arrayHelpers.push({
										name: "",
										alcohol: "",
										otherAlcohol: "",
										foodAlergy: "",
										otherAlergy: "",
										accomodation: false,
									})
								}>
								Pridať hosťa
							</AddButton>

							{values.guests.length !== 0 && (
								<AddButton style={{opacity: "1"}} variant="contained" type="submit">
									Odoslať
								</AddButton>
							)}
						</Stack>
					</Box>
				)}
			/>
		</Form>
	);
};

export default GuestForm;
