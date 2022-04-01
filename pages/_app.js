import "../styles/globals.scss";
import variables from "../styles/_variables.module.scss";
import "../styles/mui.scss";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component color={variables.primaryColor} {...pageProps} />
		</Layout>
	);
}

export default MyApp;
