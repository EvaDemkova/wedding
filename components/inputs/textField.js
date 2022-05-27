import React from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext, ErrorMessage, getIn } from 'formik';

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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
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


const textField = ({form, field, id, label, disabled, onChage, multiline, minRows, variant, placeholder }) => {
  const {setFieldValue, handleChange} = form;

  return (
    <FormControl variant="standard" sx={{ m: "8px 8px 2px 8px",  justifyContent:"space-between", display: `${disabled? "none": "flex"}` }}>
    <CssLabel >{label}</CssLabel>
      <CssTextField
        name={field.name}
        variant={variant? variant:'standard'}
        defaultValue=''
        disabled={disabled}
        
        fullWidth={false}
        id={id}
        // size="small"
        onChange={handleChange}
        multiline={multiline}
        minRows={minRows}
        placeholder={placeholder}
        error={getIn(form.errors, field.name) && getIn(form.touched, field.name)} 
      />
      <ErrorMessage component="div" name={field.name} style={{ color: '#cc0000' }}/>
    </FormControl>
  );
};

export default textField;
