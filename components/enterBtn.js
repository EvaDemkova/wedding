import React, { useRef } from "react";
import styles from "../styles/components/EnterBtn.module.scss";
import Link from 'next/link'


const EnterBtn = () => {

	return (
		<Link href="/aboutus">
		    <div className={styles.btn}>
    			<a className={styles.noselect}>Vstúpiť</a>
    		</div>
		</Link>
	);
};


export default EnterBtn