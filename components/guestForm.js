import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import {Box, TextField} from '@mui/material';
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


const GuestForm = ({
    move, swap, push, insert, unshift, pop, form
  }) => {
    console.log(form)
    const {values} = form;

    console.log(form)

	return (
		<Form>
			<FieldArray
				name="guests"
				render={(arrayHelpers) => (
					<div>
						{values.guests.map((guest, index) => (
							<div key={index}>
								
								<Field component={CssTextField} name={`guests[${index}].name_surname`} id="name_surname" label="Meno a priezvisko" variant="outlined"  size="small"  color="secondary"/>
								<Field component={TextField} name={`guests.${index}.age`} id="filled-basic" label="Filled" variant="filled" />

								<button type="button" onClick={() => arrayHelpers.remove(index)}>
									-
								</button>
							</div>
						))}
						<button
							type="button"
							onClick={() => arrayHelpers.push({ name: "", age: "" })}>
							+
						</button>
						<div>
							<button type="submit">Submit</button>
						</div> 
					</div>
				)}
			/>
		</Form>
	);
};

export default GuestForm;
