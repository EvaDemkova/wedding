import React, { useRef } from "react";
import styles from '../styles/components/Homepage.module.scss'


const Homepage = () => {
    const nodeRef = useRef()

    const showMoreInfo = () => {
        nodeRef.current.style.opacity = 1
    }

	return (
		<div className={styles.welcome} onClick={showMoreInfo}>
			<div className={styles.title}>Evka & Vavro</div>
			<div className={styles.svd}>save the date</div>
			<div className={styles.date}>13.8.2022</div>
			<div className={styles.moreInfo} ref={nodeRef}>♥ ... viac informácií onedlho ... ♥</div>
		</div>
	);
};

export default Homepage;
