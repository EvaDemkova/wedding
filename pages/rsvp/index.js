import React, { useRef, useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import { Formik, Form, Field, FieldArray } from "formik";
import GuestForm from "../../components/guestForm";
import ModalComponent from "../../components/modal";

const RSVP = () => {
	const [open, setOpen] = useState(false);
	const [modalCotent, setModalContent] = useState({
		title: "",
		content: "",
	});

	return (
		<>
			<div className={`${styles.aboutus} fade-in`} style={{ opacity: "0" }}>
				<h1 className={styles.heading} onClick={() => setOpen(true)}>
					RSVP: Répondez s´il vous plait
				</h1>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Viacerí z vás ste sa nás pýtali a ponúkali nám svoje pomocné ruky, chcem vás
					preto ubezpečiť, že práve teraz nastal váš čas ako nám najlepšie pomôžete.
				</p>
				<p className={styles.paragraph} style={{ textAlign: "center" }}>
					Pripravili sme pre každého hosťa krátky dotazník a budeme radi ak nám ho
					vyplníte a odošlete :)
				</p>
				<ModalComponent
					title={modalCotent.title}
					content={modalCotent.content}
					open={open}
					setOpen={setOpen}
				/>
				<Formik
					initialValues={{
						guests: [],
					}}
					onSubmit={(values) => {
						console.log(JSON.stringify(values, null, 2));
						fetch("/api/sheets", {
							method: "POST",
							body: JSON.stringify(values),
							headers: {
								"Content-Type": "application/json",
							},
						}).then((res) => {
							if (res.status === 200 || res.ok) {
								setModalContent({
									title: "Ďakujeme !!!",
									content: "Úspešne odoslané",
								});
								setOpen(true);
								setTimeout(() => {
									setOpen(false);
								}, 2000);
							}

							if (res.status === 400 || !res.ok) {
								setModalContent({
									title: "Ups !!!",
									content: "Niečo sa pokazilo, radšej nám napíšte :)",
								});
								setOpen(true);
								setTimeout(() => {
									setOpen(false);
								}, 2000);
							}
						});
					}}>
					{(props) => {
						return <FieldArray name="guests" component={GuestForm} {...props} />;
					}}
				</Formik>
			</div>
		</>
	);
};

export default RSVP;
