import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";

const Ceremony = () => {
	return (
		<>
			<div className={styles.aboutus}>
				<h1 className="fade-in">Obrad</h1>
				<p className="fade-in text-center">
					Obrad sa bude konať: <b></b>.
				</p>

				<h3 className="fade-in text-center">
					<b>13.8.2022 o 15:00</b>
					<br />
					<span>v historickom barokovom </span>
					<br></br>
					<b>kaštieli Kubínyi vo Vyšnom Kubíne</b>
				</h3>

				<p className="fade-in text-center">
					Povieme si svoje <b>„áno“</b> pod holým nebom s výhľadom na Veľký Choč, v
					romantickom anglickom parku za účasti rodiny a kamarátov. V prípade zlého
					počasia sa svadba uskutoční vo vnútorných priestoroch kašieľa. Sú bohužiaľ
					menšie, preto všetci dúfajte v pekné počasie :)
				</p>
				<h3 className="fade-in">DOPRAVA</h3>
				<p className="fade-in text-center"> Informácie budú doplnené</p>
				{/* <p className="fade-in">
					Kaštieľ sa nachádza cca 15 minút autom od Ružomberka, preto čo sa týka dopravy
					na miesto konania obradu a následne aj oslavy, bude zabezpečený autobus/možno
					dva pre hostí. Samozrejme je možné sa dopraviť aj vlastným auto, berte prosím
					ale na vedomie, že kapacita areálu je obmedzená
				</p> */}

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10431.22791833175!2d19.3076204!3d49.1852492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21eade3b91e94a51!2zS2HFoXRpZcS-IEt1YsOtbnlpIC0gcmXFoXRhdXLDoWNpYSBBbWFsaWE!5e0!3m2!1ssk!2scz!4v1650625071599!5m2!1ssk!2scz"
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

export default Ceremony;
