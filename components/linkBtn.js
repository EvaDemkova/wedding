import React, { useRef } from "react";
import styles from "../styles/components/LinkBtn.module.scss";
import ActiveLink from "./links/activeLink";

const LinkBtn = (props) => {
	const { path, btnText } = props;

	return (
		<ActiveLink activeClassName={styles.active} href={path}>
			<div className={styles.btn}>
				<a className={styles.noselect}>{btnText}</a>
			</div>
		</ActiveLink>
	);
};

export default LinkBtn;
