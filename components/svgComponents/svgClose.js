import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import styles from "../../styles/components/svgComponents/SvgClose.module.scss";

const SvgClose = ({ active, setActive }) => {
	
	return (
		<div
			className={`${styles.close}  ${active && styles.active}`}
			onClick={() => {
				setActive(true);
			}}>
			<SvgIcon fontSize="large">
				<path
					d="M6 18L18 6M6 6L18 18"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</SvgIcon>
		</div>
	);
};

export default SvgClose;
