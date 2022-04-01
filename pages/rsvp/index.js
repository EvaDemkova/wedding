import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import { Formik, Form, Field, FieldArray } from "formik";
import GuestForm from "../../components/guestForm";

const RSVP = () => {
	return (
		<>
			<div className={styles.aboutus}>
				<h1 className={styles.heading}>RSVP: Répondez s'il vous plait</h1>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Viacerí z vás ste sa nás pýtali a ponúkali nám svoje pomocné ruky, chcem vás
					preto ubezpečiť, že práve teraz nastal váš čas ako nám najlepšie pomôžete.
				</p>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Pripravili sme pre každého hosťa krátky dotazník a budeme radi ak nám ho
					vyplníte a odošlete :)
				</p>
				<Formik
					initialValues={{
						guests: [],
					}}
					onSubmit={(values) =>
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
						}, 500)
					}>
					{(props) => {
						return <FieldArray name="guests" component={GuestForm} {...props} />;
					}}
				</Formik>
			</div>
		</>
	);
};

export default RSVP;
