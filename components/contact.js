import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import SvgInstagram from "./svgInstagram";
import data from "../data/abouts";

const Contact = () => {
	return (
		<>
			{data.map((person, _i) => {
				return (
					<Stack spacing={5} justifyContent="center" alignItems="center" key={_i}>
						<Avatar
							alt={person.name}
							src={person.photo.src}
							sx={{ width: 150, height: 150 }}
						/>
						<Stack spacing={1} justifyContent="center" alignItems="center">
							<Stack
								direction="row"
								spacing={2}
								justifyContent="center"
								alignItems="center">
								<a href={person.fb} target="_blank">
									<FacebookRoundedIcon fontSize="large" />
								</a>

								<a href={person.ig} target="_blank">
									<SvgInstagram />
								</a>
							</Stack>
							<Stack
								direction="row"
								spacing={1}
								justifyContent="center"
								alignItems="center">
								<LocalPhoneRoundedIcon fontSize="large" />
								<p>{person.tel}</p>
							</Stack>

							<Stack
								direction="row"
								spacing={1}
								justifyContent="center"
								alignItems="center">
								<AlternateEmailRoundedIcon fontSize="large" />
								<p>{person.email}</p>
							</Stack>
						</Stack>
					</Stack>
				);
			})}
			
		</>
	);
};

export default Contact;
