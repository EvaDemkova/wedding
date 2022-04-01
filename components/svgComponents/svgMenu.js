import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import styles from "../../styles/components/svgComponents/SvgMenu.module.scss";

const SvgMenu = ({ active, setActive }) => {
	return (
		<div
			className={`${styles.menu} ${active && styles.active}`}
			onClick={() => {
				setActive(false);
			}}>
			<SvgIcon fontSize="large">
				<path
					fill="#000000"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			</SvgIcon>
		</div>
	);
};

export default SvgMenu;
