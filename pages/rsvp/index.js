import React, { useRef, useState } from "react";
import Layout from "../../components/layout";
// import styles from "../../styles/pages/AboutUs.module.scss";
import { Formik, Form, Field, FieldArray, getIn, FastField } from "formik";
import GuestForm from "../../components/guestForm";
import ModalComponent from "../../components/modal";
import * as Yup from "yup";
import { alpha, styled } from "@mui/material/styles";
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
import Select from "../../components/inputs/select";
import Radios from "../../components/inputs/radios";
import styles from "../../styles/components/GuestForm.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "../../components/inputs/textField";

const VALIDATION_SCHEMA = Yup.object({
	guests: Yup.array().of(
		Yup.object({
			name: Yup.string().required("Vyplň meno"),
			alcohol: Yup.string().required("Vyber si :)"),
			otherAlcohol: Yup.string(),
			foodAlergy: Yup.string().required("Daj nám vedieť, či nemáš alergiu :)"),
			otherAlergy: Yup.string(),
			note: Yup.string(),
		})
	),
});

const RSVP = () => {
	const [open, setOpen] = useState(false);
	const [modalCotent, setModalContent] = useState({
		title: "",
		content: "",
	});

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
			borderColor: "#cc0000",
		},
	});

	const AddButton = styled(Button)({
		backgroundColor: "#136f63",
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
			backgroundColor: "#22aaa1",
		},
	});

	return (
		<>
			<div className={`${styles.aboutus} fade-in`} style={{ opacity: "0" }}>
				<h1 className={styles.heading} onClick={() => setOpen(true)}>
					RSVP: Répondez s´il vous plait
				</h1>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Viacerí z vás ste sa nás pýtali a ponúkali nám svoje pomocné ruky, chcem vás
					preto ubezpečiť, že práve teraz nastal váš čas ako nám najlepšie pomôžete.
				</p>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Pripravili sme pre každého hosťa krátky dotazník a budeme radi ak nám ho
					vyplníte a odošlete :)
				</p>
				<ModalComponent
					title={modalCotent.title}
					content={modalCotent.content}
					open={open}
					setOpen={setOpen}
				/>
				<Formik
					initialValues={{
						guests: [],
					}}
					// validateOnChange={false}
					// validateOnBlur={false}
					validationSchema={VALIDATION_SCHEMA}
					onSubmit={(values) => {
						console.log(values);
						fetch("/api/sheets", {
							method: "POST",
							body: JSON.stringify(values),
							headers: {
								"Content-Type": "application/json",
							},
						}).then((res) => {
							if (res.status === 200 || res.ok) {
								setModalContent({
									title: "Ďakujeme !!!",
									content: "Úspešne odoslané",
								});
								setOpen(true);
								setTimeout(() => {
									setOpen(false);
								}, 2000);
								// window.location.href = "/contacts";
							}

							if (res.status === 400 || !res.ok) {
								setModalContent({
									title: "Ups !!!",
									content: "Niečo sa pokazilo, radšej nám napíšte :)",
								});
								setOpen(true);
								setTimeout(() => {
									setOpen(false);
								}, 2000);
							}
						});
					}}>
					{({ isSubmitting, handleSubmit, values }) => {
						return (
							<Form noValidate onSubmit={handleSubmit}>
								{/* <Field name="guests" component={GuestForm} /> */}

								{console.log(values)}
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
														<h3 className={styles.heading}>
															Hosť {index + 1}
														</h3>
														<CssButton
															style={{}}
															variant="outlined"
															onClick={() =>
																arrayHelpers.remove(index)
															}>
															Odstrániť hosťa
														</CssButton>
													</Stack>

													<Stack>
														<FastField
															component={TextField}
															name={`guests.${index}.name`}
															id={`id_name_${index}`}
															label="Meno a priezvisko"
															value={getIn(
																values,
																`guests.${index}.name`
															)}
															onChange={onChange}
														/>
													</Stack>
													<Stack
														direction={{ xs: "column", md: "row" }}
														justifyContent={"space-between"}>
														<FastField
															component={Select}
															name={`guests.${index}.alcohol`}
															id={`id_name_${index}`}
															label="Preferovaný typ alkoholu"
															value={getIn(
																values,
																`guests.${index}.alcohol`
															)}
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
														<FastField
															component={TextField}
															name={`guests.${index}.otherAlcohol`}
															id={`id_otherAlcohol_${index}`}
															label="Iný alkohol"
															disabled={
																getIn(
																	values,
																	`guests.${index}.alcohol`
																) !== "iné"
															}
															value={getIn(
																values,
																`guests.${index}.otherAlcohol`
															)}
														/>
													</Stack>
													<Stack
														direction={{ xs: "column", md: "row" }}
														justifyContent={"space-between"}>
														<FastField
															component={Select}
															name={`guests.${index}.foodAlergy`}
															id={`id_name_${index}`}
															label="Potravinové alergie"
															value={getIn(
																values,
																`guests.${index}.foodAlergy`
															)}
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

														<FastField
															component={TextField}
															name={`guests.${index}.otherAlergy`}
															id={`id_otherAlergy_${index}`}
															label="Iné potravinové alergie"
															disabled={
																getIn(
																	values,
																	`guests.${index}.foodAlergy`
																) !== "iné"
															}
															value={getIn(
																values,
																`guests.${index}.otherAlergy`
															)}
														/>
													</Stack>
													{/* <FastField
														component={Radios}
														name={`guests.${index}.accomodation`}
														id={`id_accomodation_${index}`}
														label="Budeš chcieť zarezervovať ubytovanie?"
														value={getIn(
															values,
															`guests.${index}.accomodation`
														)}
													/> */}

													<FastField
														component={TextField}
														name={`guests.${index}.note`}
														id={`id_note_${index}`}
														label="Poznámka"
														value={getIn(
															values,
															`guests.${index}.note`
														)}
														variant="outlined"
														minRows={3}
														multiline={true}
														placeholder="Dátum rezervácie ubytovania alebo preferovaná izba? Vaša doprava? alebo chcete nám nechať ešte nejakú milú poznámku? "
													/>
												</Stack>
											))}

											<Stack
												direction={{ xs: "column", md: "row" }}
												justifyContent={`${
													values.guests.length === 0
														? "center"
														: "space-between"
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
													style={{ opacity: "1" }}
													variant="contained"
													onClick={() =>
														arrayHelpers.push({
															name: "",
															alcohol: "",
															otherAlcohol: "-",
															foodAlergy: "",
															otherAlergy: "-",
															// accomodation: 'nie',
														})
													}>
													Pridať hosťa
												</AddButton>

												{values.guests.length !== 0 && (
													<AddButton
														style={{ opacity: "1" }}
														variant="contained"
														type="submit">
														Odoslať
													</AddButton>
												)}
											</Stack>
										</Box>
									)}
								/>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default RSVP;
