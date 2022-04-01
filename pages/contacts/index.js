import React from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import Stack from "@mui/material/Stack";
import Contact from "../../components/contact";
import { Box } from "@mui/system";

const Contacts = () => {
	return (
		<>
			
				<div className={styles.aboutus}>
					<h1 className={styles.heading}>Kontakty na nás</h1>
					<Box sx={{ my: "7%"  }}>
						<p className={styles.paragraph} style={{textAlign: "center"}}>
							Ak budete mať ohľadom svadby nejaké ďalšie otázky, tak nás samozrejme
							neváhajte kontaktovať akýmkoľvek spôsobom :)
						</p>
					</Box>

					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={{ xs: 3, md: 15, lg: 30 }}
						justifyContent="center"
						alignItems="center"
						sx={{ my: '50px' }}>
						<Contact />
					</Stack>
				</div>
			
		</>
	);
};

export default Contacts;
