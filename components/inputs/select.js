import React, { useState } from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  FormLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';
import { alpha, styled } from '@mui/material/styles';

const select = ({ form, field, id, label, value, options }) => {
  const {setFieldValue} = form;

  const handleChange = (e) => {
    setFieldValue(field.name, e.target.value)
  }

  const CssSelect = styled(Select)({
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: "2px solid white"
    }, 
    '&:after': {
      borderBottom: "1px solid black"
    },
    '&': {
      marginTop: '10px !important'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black'
   
    }

  })
  ;

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
 

  return (
    <FormControl variant="outlined" size="small" sx={{ m: "8px 8px 2px 8px", minWidth:"50%", justifyContent:"space-between" }} >
      <CssLabel sx={{ minWidth: 200 }}>{label}</CssLabel>
      <CssSelect
        labelId='demo-simple-select-standard-label'
        id={id}
        //   value={age}
        onChange={(e)=>handleChange(e)}
        //   label="Age"
        name={field.name}
        sx={{ mt: 1 }}
        value={value}
      >
        {
          options.map((opt, i)=> {
            return (  <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>)
          })
        }
      </CssSelect>
    </FormControl>
  );
};

export default select;
