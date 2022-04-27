import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
    color: "#ffffff",
    textAlign: "center"
  };

const ModalComponent = ({ title, content, open, setOpen }) => {
	
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box sx={style}>
				<Typography variant="h5" component="h5">
					{" "}
					{title}{" "}
				</Typography>
				<Typography sx={{ mt: 2, opacity: "1" }} variant="p" component="p" > {content} </Typography>
			</Box>
		</Modal>
	);
};

export default ModalComponent;
