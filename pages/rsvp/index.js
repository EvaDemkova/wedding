import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import { Formik, Form, Field, FieldArray } from "formik";
import GuestForm from "../../components/guestForm";

const RSVP = () => {
	return (
		<>
			<Layout>
				<div className={styles.aboutus}>
					<Formik
						initialValues={{ guests: ["1"] }}
						onSubmit={(values) =>
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
							}, 500)
						}>
						{(props) => {
							return <FieldArray name="guests" component={GuestForm} {...props}/>;
						}}
					</Formik>
				</div>
			</Layout>
		</>
	);
};

export default RSVP;
