import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Homepage from "../components/homepage";
import AppLayout from "../components/appLayout";

export default function Home() {
	return (
		<AppLayout>
			<Homepage />
		</AppLayout>
	);
}
