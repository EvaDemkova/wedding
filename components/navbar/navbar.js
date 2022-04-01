import React, { useRef, useState } from "react";
import styles from "../../styles/components/Navbar.module.scss";
import data from "../../common/data.json";
import LinkBtn from "../linkBtn";
import Image from "next/image";
import logo from "../../public/svg/hearts.svg";
import useWindowSize from "../../hooks/useWindowSize";
import useMobileLayout from "../../hooks/useMobileLayout";
import axios from "axios";
import SvgClose from "../svgComponents/svgClose.js";
import SvgMenu from "../svgComponents/svgMenu.js";
import Stack from "@mui/material/Stack";
import Link from "next/dist/client/link";

export default function Navbar() {
	const [active, setActive] = useState(true);
	const navBreakpoint = 1070;
	const windowSize = useWindowSize();
	const isMobile = useMobileLayout(windowSize, navBreakpoint);
	console.log(windowSize, isMobile)

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

	if (!isMobile) {
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
	} else {
		return (
			<>
				<Stack
					direction="column"
					className={styles.mobile}
					justifyContent="center"
					sx={{
						position: `${active ? "relative" : "fixed"}`,
						background: `${
							active
								? "none"
								: "linear-gradient(to right, #E4E3DE, #DBDAD5, #D3D2CD, #CFCEC9, #CCCBC6, #C9CAC4 , #C5C7C4)"
						}`,
					}}>
					<Stack
						direction="row"
						spacing={{ xs: 3, md: 15, lg: 30 }}
						sx={{
							mx: "5%",
						}}
						justifyContent="flex-end"
						alignItems="center">
						<SvgClose active={!active} setActive={setActive} />
						<SvgMenu active={active} setActive={setActive} />
					</Stack>
					<Stack
						spacing={{ xs: 8 }}
						sx={{
							display: `${active ? "none" : "flex"}`,
							height: `${active ? "0" : "calc(100vh - 79px)"}`,
						}}
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
						className={styles.menu}>
						{data.navbar.map((link, _i) => {
							return (
								<Link key={_i} href={link.path} className={styles.mobileLink}
								onClick={() => setActive(true)}>
									<p
										className={styles.mobileLink}
										onClick={() => setActive(true)}>
										{link.title}
									</p>
								</Link>
							);
						})}
					</Stack>
				</Stack>
			</>
		);
	}
}
