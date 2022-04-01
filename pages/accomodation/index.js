import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";

const Accomodation = () => {
	return (
		<>
			
				<div className={styles.aboutus}>
					<h1 className={styles.heading}>Accomodation</h1>
					<p className={styles.paragraph}>
						Myslíme na vás aj s ubytovaním ! 
					</p>
					<p  className={styles.paragraph}>
						Na víkend 12-14.8 sme zarezervovali penzión Biely Dom ! 
					</p>
				</div>
			
		</>
	);
};

export default Accomodation;
