import AppLayout from './appLayout'
import Navbar from "./navbar/navbar";
import styles from '../styles/components/Layout.module.scss'
import Homepage from './homepage'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
	const router = useRouter()

	if (router.pathname === '/') {
		return (
			<>
			<AppLayout>
				<Homepage />
			</AppLayout>
		</>
		)
	}

	return ( 
		<>
			<AppLayout>
				<div className={styles.layout}>
					<Navbar />
					<div className={styles.container}>{children}</div>
				</div>
			</AppLayout>
		</>
	);
};

export default Layout;
