import React from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';

import { Box, TextField, FormControl,
  Select,
  InputLabel,
  FormLabel,
  MenuItem,
  FormHelperText,} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
    backgroundColor: "transparent"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: "2px solid #000000"
  },


});

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


const textField = ({form, field, id, label, disabled, onChage }) => {
  const {setFieldValue} = form;

  const handleChange = (e) => {
    setFieldValue(field.name, e.target.value)
  };

  return (
    <FormControl variant="standard" sx={{ m: "8px 8px 2px 8px",  justifyContent:"space-between", display: `${disabled? "none": "flex"}` }}>
    <CssLabel >{label}</CssLabel>
      <CssTextField
        name={field.name}
        variant='standard'
        defaultValue=''
        disabled={disabled}
        error={false}
        fullWidth={false}
        id={id}
        // size="small"
        onChange={(e) => handleChange(e)}
      />
    </FormControl>
  );
};

export default textField;
