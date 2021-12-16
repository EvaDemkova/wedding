import React, { useRef } from "react";
import styles from '../styles/components/Homepage.module.scss'


const Homepage = () => {
    const nodeRef = useRef()

    const showMoreInfo = () => {
        nodeRef.current.style.opacity = 1
		nodeRef.current.style.visibility = "visible"
    }

	return (
		<div className={styles.welcome} >
			<div className={styles.welcomeContainer}>
			    <div className={styles.title}>Evka & Vavro</div>
    			<div className={styles.svd}>save the date</div>
    			<div className={styles.date} onClick={showMoreInfo}>13.8.2022</div>
    			<div className={styles.moreInfo} ref={nodeRef}>... viac informácií onedlho ... </div>
			</div>
		</div>
	);
};

export default Homepage;
