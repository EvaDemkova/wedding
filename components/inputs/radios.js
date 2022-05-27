import React, {useState} from "react";
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
    
} from "@mui/material";
import { Formik, Form, Field, FieldArray, useFormikContext , ErrorMessage} from 'formik';
import { alpha, styled } from '@mui/material/styles';

const Radios = ({ field, id,label}) => {
    const formik = useFormikContext();
  const {setFieldValue, values} = formik;
    const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setFieldValue(field.name, event.target.value)
  };

//   console.log(values, field.name)

  const CssLabel= styled(FormLabel)({
    '&.Mui-focused': {
      color: "black"
    },
    '&':  {
      color: "black",
      fontWeight: '600', 
      fontStyle: 'italic'
    }
  })

  const CssRadio= styled(Radio)({
    '&': {
      color: "black"
    },
	'&.Mui-checked': {
		color: "black"
	  },
	  '&:hover': {
		backgroundColor: "rgba(0, 0, 0, 0.07)"
	  },
      })

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

	return (
		<Stack direction={{ xs: "column", md: "row" }} sx={{m: "12px 8px 2px 8px"}} alignItems={"center"}>
			<CssLabel id="demo-row-radio-buttons-group-label" sx={{mr: 3}}>{label}</CssLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name={field.name}>
				<FormControlLabel value={'áno'} control={<CssRadio {...controlProps('ano')} size="small"/>} label="Áno" />
				<FormControlLabel value={'nie'} control={<CssRadio {...controlProps('nie')} size="small"/>} label="Nie" />
			</RadioGroup>
			<ErrorMessage component="div" name={field.name} sx={{ color: 'error.main' }}/>
		</Stack>
	);
};

export default Radios;
