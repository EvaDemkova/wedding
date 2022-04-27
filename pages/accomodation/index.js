import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";

const Accomodation = () => {
	return (
		<>
			<div className={styles.aboutus}>
				<h1 className="fade-in">Ubytovanie</h1>
				<p className="fade-in text-center">Myslíme na vás aj s ubytovaním !</p>
				<p className="fade-in">
					Na víkend<b> 12-14.8</b> sme zarezervovali penzión Biely Dom v Ružomberku ktorý je
					vzdiaľený asi 6 min autom od miesta konania oslavy. Účastníci našej svadby budú
					mať špeciálnu zvýhodnenú cenu. Možnosť ubytovania je s raňajkami, alebo bez
					nich.
				</p>
				<p className="fade-in">
					K dispozícií je 12 izieb, jednoposteľových, dvojposteľových s možnosťou
					prístelky a pre náročnejších dva priestranné apartmány v podkroví. Všetky izby
					sú vybavené vlastnou kúpeľňou, WC a pripojením na internet.
				</p>

				<ul className="fade-in">
					<li className="fade-in ">
						20 €/deň/osoba v dvojposteľovej izbe alebo v apartmáne
					</li>
					<li className="fade-in ">16 €/deň prístelka (len pre deti do 13r)</li>
					<li className="fade-in">30 €/deň jednoposteľová izba</li>
				</ul>

				<p className="fade-in text-center">
					Odkaz na ubytovanie nájdete
					<a
						href="http://www.bielydom.sk/index.php?stranka=ubytovanie"
						target="_blank"
						rel="noreferrer"
						className="styled-anchor">
						TU
					</a>
				</p>
				<p className="fade-in">
					Čo sa týka rezervácie, kontaktuje priamo penzión Biely Dom a nahláste heslo
					<i>Evka a Vavro</i>, prípadne kontaktuje nás
				</p>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10456.59092251561!2d19.3093181!3d49.0648265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92661570ec200ec9!2sPenzi%C3%B3n%20Biely%20Dom!5e0!3m2!1ssk!2scz!4v1650541727049!5m2!1ssk!2scz"
					width="100%"
					height="300"
					style={{ border: "0", marginTop: "50px" }}
					allowFullScreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>
	);
};

export default Accomodation;
