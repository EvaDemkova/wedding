import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import { Box, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const textField = ({ field, id }) => {
  // const formik = useFormikContext();
  // const {setFieldValue} = formik;

  const handleChange = (e) => {
    // setFieldValue(field.name, e.target.value)
  };

  return (
    <>
      <CssTextField
        name={field.name}
        variant='standard'
        defaultValue=''
        disabled={false}
        error={false}
        fullWidth={false}
        id={id}
        // size="small"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default textField;
