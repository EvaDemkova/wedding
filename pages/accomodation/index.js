import React, { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pages/AboutUs.module.scss";

const Accomodation = () => {
	return (
		<>
			<Layout>
				<div className={styles.aboutus}>
					<h1 className={styles.heading}>Accomodation</h1>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus
						aliquam metus. Nullam feugiat, turpis at pulvinar vulputate, erat libero
						tristique tellus, nec bibendum odio risus sit amet ante. Etiam posuere lacus
						quis dolor. Duis pulvinar. Duis condimentum augue id magna semper rutrum.
						Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in
						magna gravida vehicula. Nulla pulvinar eleifend sem. Phasellus et lorem id
						felis nonummy placerat. Aliquam erat volutpat. Vestibulum erat nulla,
						ullamcorper nec, rutrum non, nonummy ac, erat. Nulla turpis magna, cursus
						sit amet, suscipit a, interdum id, felis. In sem justo, commodo ut, suscipit
						at, pharetra vitae, orci. Lorem ipsum dolor sit amet, consectetuer
						adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Duis viverra diam non justo. Aliquam in
						lorem sit amet leo accumsan lacinia. Mauris tincidunt sem sed arcu. Nullam
						rhoncus aliquam metus. Maecenas ipsum velit, consectetuer eu lobortis ut,
						dictum at dui. Etiam quis quam. Cras elementum.
					</p>
					<p  className={styles.paragraph}>
						In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel
						imperdiet sapien wisi sed libero. Donec vitae arcu. Curabitur bibendum justo
						non orci. Fusce wisi. Etiam egestas wisi a erat. Praesent dapibus. Nulla non
						arcu lacinia neque faucibus fringilla. Nulla est. Pellentesque arcu. Aliquam
						erat volutpat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
						dui.
					</p>
				</div>
			</Layout>
		</>
	);
};

export default Accomodation;
