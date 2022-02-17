import AppLayout from './appLayout'
import Navbar from "./navbar/navbar";
import styles from '../styles/components/Layout.module.scss'

const Layout = ({ children }) => {
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
