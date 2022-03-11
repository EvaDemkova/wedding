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
	const windowSize = useWindowSize()
	const [columns, setColumns] = useState(6)
	console.log(windowSize)

	useEffect(() => {
		
		if (windowSize && windowSize.width > 2000) {
			setColumns(6)
		} else if (windowSize && windowSize.width > 1536)  {
			setColumns(5)
		} else if (windowSize && windowSize.width > 1200) {
			setColumns(4)
		}  else if (windowSize && windowSize.width > 900) {
			setColumns(3)
		} else {
			setColumns(2)
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
			<Layout>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>Náš príbeh</h1>

					<p className={styles.paragraph}>
						In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel
						imperdiet sapien wisi sed libero. Donec vitae arcu. Curabitur bibendum justo
						non orci. Fusce wisi. Etiam egestas wisi a erat. Praesent dapibus. Nulla non
						arcu lacinia neque faucibus fringilla. Nulla est. Pellentesque arcu. Aliquam
						erat volutpat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
						dui.
					</p>
					<div className={styles.gallery}>
						<h1 className={styles.heading} style={{textAlign: "center"}}>... my ...</h1>
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
			</Layout>
		</>
	);
};

export default AboutUs;
