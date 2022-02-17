import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/components/Homepage.module.scss";
import EnterBtn from "./enterBtn";

const Homepage = () => {
	const nodeRef = useRef();

	return (
		<div className={styles.welcome}>
			<div className={styles.welcomeContainer}>
				<div className={styles.title} ref={nodeRef}>
					Evka & Vavro
				</div>
				<div className={styles.svd}>save the date</div>
				<div className={styles.date}>13.8.2022</div>

				<EnterBtn />
			</div>
		</div>
	);
};

export default Homepage;
