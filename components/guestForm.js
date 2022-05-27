import React from "react";
import { Formik, Form, Field, FieldArray, getIn, ErrorMessage } from "formik";
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

const GuestForm = ({  form }) => {
		const {values} = form;
		console.log(values)
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
			backgroundColor: "#22aaa1"
		}
	});

	return (
		
			null
	);
};

export default GuestForm;
