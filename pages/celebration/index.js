import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import Link from 'next/link'

const Celebration = () => {
	return (
		<>
			<div className={styles.aboutus}>
				<h1 className="fade-in">Oslava</h1>

				<p className="fade-in">
					Po obrade v kaštieli sa spoločne presunieme do priestorov Kultúrneho domu v
					Ludrovej pri Ružomberku. Kde na nás už bude všetko čakať :)
				</p>

				<p className="fade-in ">
					
					Ak chcete priložiť ruku k dielu, nezabudnite nám vyplniť krátky formulár hosťa v{" "}
					<Link href="/rsvp">
						<a className="styled-anchor">RSVP</a>
					</Link>{" "}
					záložke.
				</p>

				<h3 className="fade-in">DOPRAVA</h3>
				<p className="fade-in ">
					V okolí KD je obmedzené miesto parkovania, zvážte prosím preto dopravu autom do
					Ludrovej a využite radšej plánovanú dopravu autobusmi. <br/>
					Počas celej oslavy vám
					budú k dispozícií šoféri a autá, pre akýkoľvek prípad :)
				</p>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307.5586072187066!2d19.330214458053536!3d49.04639485287537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a764ab046111%3A0xf3464c84ef98ce9f!2zT2JlY27DvSDDunJhZA!5e0!3m2!1scs!2scz!4v1651828082577!5m2!1scs!2scz"
					width="100%"
					height="300"
					style={{ border: "0", marginTop: "50px" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>
	);
};

export default Celebration;
