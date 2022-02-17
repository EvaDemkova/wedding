import React, { useRef, useState } from "react";
import styles from "../../styles/components/Navbar.module.scss";
import data from "../../common/data.json";
import LinkBtn from "../linkBtn";
import Image from "next/image";
import logo from "../../public/images/hearts.svg";
import useWindowSize from "../../hooks/useWindowSize";
import useMobileLayout from "../../hooks/useMobileLayout";
import axios from "axios";

export default function Navbar() {
	const navBreakpoint = 1200;
	const windowSize = useWindowSize()
	const isMobile = useMobileLayout(windowSize, navBreakpoint)

	
	function submitHandler(data) {
		console.log(data);
		// fetch('/api/sheet', {
		//   method: 'POST',
		//   body: JSON.stringify(data),
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		// });
		// reset(); // clears the input on submitting
	}
	
	return (
		<div className={styles.navbar}>
			<div className={styles.first_half}>
				{data.navbar_part1.map((link, _i) => {
					return <LinkBtn key={_i} path={link.path} btnText={link.title} />;
				})}
			</div>

			<Image width={100} height={100} src={logo} />

			<div className={styles.second_half}>
				{data.navbar_part2.map((link, _i) => {
					return <LinkBtn key={_i} path={link.path} btnText={link.title} />;
				})}
			</div>
		</div>
	);
}
