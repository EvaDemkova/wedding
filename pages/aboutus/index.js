import React, { useRef, useEffect, useState, useCallback } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";
import Gallery from "react-photo-gallery-next";
import photos from "../../data/photos.json";
import Carousel, { Modal, ModalGateway } from "react-images";
import useMobileLayout from "../../hooks/useMobileLayout";
import useWindowSize from "../../hooks/useWindowSize";

const AboutUs = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);
	const windowSize = useWindowSize();
	const [columns, setColumns] = useState(6);

	useEffect(() => {
		if (windowSize && windowSize.width > 2000) {
			setColumns(8);
		} else if (windowSize && windowSize.width > 1536) {
			setColumns(7);
		} else if (windowSize && windowSize.width > 1200) {
			setColumns(5);
		} else {
			setColumns(3);
		}
	}, [windowSize]);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className="fade-in">Náš príbeh</h1>
				<p className="fade-in">
					Spoznali sme sa v októbri 2015 cez nášho spoločného kamaráta Romana, s ktorým
					sme boli na výlete na Rakytov. Po nadľudskom výkone a túre ktorá mohla trvať
					maximálne 3 hodiny aj s cestou autom na Smrekovicu, sme to samozrejme večer
					museli ísť osláviť do najkultúrnejšieho miesta tej doby v Ružomberku, do Šneku,
					kde sme pri prvom nápoji stvrdili svoje nové kamarátstvo.
				</p>
				<p className="fade-in">
					Najvýznamnejším obratom bol spoločný ples o rok neskôr. Po
					pretancovanej noci, samozrejme úplne triezvy  prišlo vyznanie lásky, po ktorom sme sa rozhodli, že by sme to spolu mohli
					skúsiť. No a keďže túto skutčnosť si pamätal len jeden z nás, tak pre druhého to
					bolo na ďalší deň v skutku veľké prekvapenie :)
				</p>
				<p className="fade-in">
					Čas plynul, a Evka sa z Brna presťahovala do Prahy, kde sa začala kapitola sama
					o sebe. Spoločné nažívanie. Sem tam sme pracovali, sem tam sme cestovali, zažili
					obrovské radosti aj zopár starostí. Výber z toho najlepšieho sme dali <a href="#gallery-scroll" className="styled-anchor">nižšie do
					galérie.</a>
				</p>
				<p className="fade-in">
					Jednoduché to nebolo ani pri pokuse o žiadosť o ruku, chcel som Evku požiadať na
					vrchole Ještědu po skialpovom výlete s výhľadom na mesto a slnkom zaliatou
					zasneženou bielou krajinou.
					<br /> Keďže tam spočiatku bolo veľa ľudí a nechcel som tam robiť kino, čakal
					som na vhodný moment. Ten prišiel o niekoľko minút neskôr a tak som vložil ruku
					do vrecka a povedal <i>„Evka chcela by som ti dačo povedať“</i> v tom prišla
					odpoveď <i>„Povieš mi to v aute, poď“</i>,ani sa neotočila, šikovne si zapla
					lyže a zlyžovala dole kopcom.
				</p>
				<p className="fade-in">
					Druhý krát som preto už nič neriskoval a požiadal ju v Prahe na Letnej a hlavne
					bez lyží :){" "}
				</p>

				<p className="fade-in ">
					A tak sa začala črtať ďalšia kapitola nášho príbehu, ktorá sa oficiálne začne{" "}
					<b>13.8.2022.</b> Neoficiálne sa začala, keď sme si kúpili nášho nového člena
					domácnosti nášho psa Kaspera ♥
				</p>
				<p className={`fade-in text-center`} >
					Tak dúfame, že budete súčasťou nášho ďalšieho spoločného príbehu aj vy.
				</p>
				<div className={styles.gallery} id="gallery-scroll">
					<h1 className={styles.heading} style={{ textAlign: "center" }}>
						... ♥ ...
					</h1>
					<Gallery
						photos={photos.resources}
						direction={"column"}
						columns={columns}
						onClick={openLightbox}
					/>
					<ModalGateway>
						{viewerIsOpen ? (
							<Modal onClose={closeLightbox}>
								<Carousel
									currentIndex={currentImage}
									views={photos.resources.map((x, _i) => ({
										key: _i,
										...x,
										srcset: x.srcSet,
										caption: x.title,
									}))}
								/>
							</Modal>
						) : null}
					</ModalGateway>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
